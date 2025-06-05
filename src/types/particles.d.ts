declare namespace particlesJS {
    interface IParticlesJS {
        (tagId: string, options: IParticlesJSConfig): void;
    }

    interface IParticlesJSConfig {
        particles?: {
            number?: {
                value?: number;
                density?: {
                    enable?: boolean;
                    value_area?: number;
                };
            };
            color?: {
                value?: string | string[];
            };
            shape?: {
                type?: string | string[];
            };
            opacity?: {
                value?: number;
                random?: boolean;
                anim?: {
                    enable?: boolean;
                    speed?: number;
                    opacity_min?: number;
                    sync?: boolean;
                };
            };
            size?: {
                value?: number;
                random?: boolean;
                anim?: {
                    enable?: boolean;
                    speed?: number;
                    size_min?: number;
                    sync?: boolean;
                };
            };
            line_linked?: {
                enable?: boolean;
                distance?: number;
                color?: string;
                opacity?: number;
                width?: number;
            };
            move?: {
                enable?: boolean;
                speed?: number;
                direction?: string;
                random?: boolean;
                straight?: boolean;
                out_mode?: string;
                bounce?: boolean;
                attract?: {
                    enable?: boolean;
                    rotateX?: number;
                    rotateY?: number;
                };
            };
        };
        interactivity?: {
            detect_on?: string;
            events?: {
                onhover?: {
                    enable?: boolean;
                    mode?: string | string[];
                };
                onclick?: {
                    enable?: boolean;
                    mode?: string | string[];
                };
                resize?: boolean;
            };
            modes?: {
                grab?: {
                    distance?: number;
                    line_linked?: {
                        opacity?: number;
                    };
                };
                push?: {
                    particles_nb?: number;
                };
            };
        };
        retina_detect?: boolean;
    }
}

declare const particlesJS: particlesJS.IParticlesJS; 