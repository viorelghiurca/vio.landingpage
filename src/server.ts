import express, { Express, Request, Response } from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';

// Load environment variables
dotenv.config();

const app: Express = express();

const HTTP_PORT: number = parseInt(process.env.HTTP_PORT || '3000', 10);
const HTTPS_PORT: number = parseInt(process.env.HTTPS_PORT || '3443', 10);
const SSL_CERT_PATH: string | undefined = process.env.SSL_CERT_PATH;
const SSL_KEY_PATH: string | undefined = process.env.SSL_KEY_PATH;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
            styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com", "cdn.jsdelivr.net"],
            fontSrc: ["'self'", "fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "cdn.jsdelivr.net"],
            connectSrc: ["'self'"]
        }
    }
}));

// Compression middleware
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, '../docs')));

// Main route
app.get('/', (_req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, '../docs', 'index.html'));
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: express.NextFunction): void => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// HTTPS server setup
if (SSL_CERT_PATH && SSL_KEY_PATH && fs.existsSync(SSL_CERT_PATH) && fs.existsSync(SSL_KEY_PATH)) {
    const sslOptions = {
        cert: fs.readFileSync(SSL_CERT_PATH),
        key: fs.readFileSync(SSL_KEY_PATH)
    };
    https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
        console.log(`\n🚀 HTTPS Server läuft auf: https://localhost:${HTTPS_PORT}`);
        console.log(`📱 Öffne die URL in deinem Browser\n`);
    });
} else {
    app.listen(HTTP_PORT, () => {
        console.warn('SSL certificate or key not found. Running HTTP only.');
        console.log(`\n🚀 Server läuft auf: http://localhost:${HTTP_PORT}`);
        console.log(`📱 Öffne die URL in deinem Browser\n`);
    });
} 