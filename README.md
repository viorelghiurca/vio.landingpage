# Viorel Ghiurca - Landing Page

Eine moderne, minimalistisch gestaltete Landing Page für Viorel Ghiurca, IHK geprüfter Fachinformatiker.

## 🚀 Features

- Modernes, minimalistisches Design im Darcula-Theme
- Interaktiver Partikel-Hintergrund
- Responsive Layout für alle Geräte
- Smooth Scrolling Navigation
- Fade-in Animationen
- Optimierte Performance
- **HTTPS-Unterstützung mit konfigurierbaren Zertifikatspfaden**

## 🛠️ Technologien

- Node.js (TypeScript)
- Express.js
- Particles.js für den interaktiven Hintergrund
- Modernes CSS mit CSS Variables
- Vanilla JavaScript/TypeScript (Client)

## 📋 Voraussetzungen

- Node.js (Version 14 oder höher)
- npm (Version 6 oder höher)
- Eigene SSL-Zertifikate (z.B. self-signed für Entwicklung oder echte für Produktion)

## 🔒 HTTPS & .env Konfiguration

Der Server unterstützt HTTPS out-of-the-box. Die wichtigsten Einstellungen werden über eine `.env`-Datei vorgenommen:

```env
HTTP_PORT=3000         # Optional, Standard-HTTP-Port (für lokale Entwicklung)
HTTPS_PORT=443         # Standard-HTTPS-Port (443 für Produktion empfohlen)
SSL_CERT_PATH=./certs/cert.pem   # Pfad zum SSL-Zertifikat
SSL_KEY_PATH=./certs/key.pem     # Pfad zum privaten Schlüssel
```

**Hinweise:**
- Für HTTPS auf Port 443 sind Administratorrechte erforderlich.
- Wenn Zertifikate fehlen, läuft der Server automatisch nur auf HTTP.
- Die Zertifikatsdateien müssen existieren und lesbar sein.
- HTTP und HTTPS können parallel laufen (z.B. HTTP für Weiterleitung oder lokale Entwicklung).

## 🚀 Installation

1. Repository klonen:
   ```bash
   git clone https://github.com/yourusername/vio.landingpage.git
   cd vio.landingpage
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. `.env`-Datei anlegen (siehe oben) und Zertifikate bereitstellen.

4. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

5. Produktionsbuild erstellen und starten:
   ```bash
   npm run build
   npm start
   ```

## 📁 Projektstruktur

```
vio.landingpage/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── index.html
├── src/
│   ├── client/
│   │   └── main.ts
│   ├── types/
│   │   └── particles.d.ts
│   └── server.ts
├── certs/
│   ├── cert.pem
│   └── key.pem
├── package.json
├── tsconfig.json
├── webpack.config.js
├── nodemon.json
├── .eslintrc.json
└── README.md
```

## 🎨 Design

- Farbschema basierend auf Darcula-Theme
- Responsive Design für alle Bildschirmgrößen
- Moderne Typografie mit Inter Font
- Interaktive Elemente mit Hover-Effekten
- Smooth Animations für bessere UX

## 📱 Responsive Design

Die Landing Page ist optimiert für:
- Desktop (1920px und größer)
- Laptop (1366px - 1919px)
- Tablet (768px - 1365px)
- Mobile (bis 767px)

## 🔧 Konfiguration

Die wichtigsten Konfigurationsdateien sind:
- `src/server.ts` - Server-Konfiguration (inkl. HTTPS)
- `public/css/style.css` - Styling und Theme
- `src/client/main.ts` - Interaktivität und Animationen
- `.env` - Umgebungsvariablen für Ports und Zertifikate

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## 👤 Kontakt

Viorel Ghiurca
- E-Mail: [contact@example.com](mailto:contact@example.com)
- Website: [www.example.com](https://www.example.com)

## 🙏 Danksagung

- Particles.js für den interaktiven Hintergrund
- Google Fonts für die Inter Schriftart
- Express.js Team für das Backend-Framework 