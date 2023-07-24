import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Particlesjs() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "#0000",
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "image",
                        image: {
                            src: "https://i.ibb.co/9YwG0pb/balloon-png.png",
                        }
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: 50,
                    },
                    links: {
                        enable: false,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "bottom",
                        straight: false,
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        }
                    },
                    number: {
                        value: 50,
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                },
                retina_detect: true,
            }}
        />
    );
};