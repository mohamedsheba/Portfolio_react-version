import { useEffect } from "react";
import homeImage from "../assets/home-img.jpg";

export default function Home() {
    const socialLinks = [
        { name: "linkedIn", url: "https://www.linkedin.com/in/mohamed-sheba" },
        { name: "Github", url: "https://github.com/mohamedsheba" },
        { name: "Email", url: "mailto:mohamed.sheba101@gmail.com" }
    ]

    useEffect(() => {
        const homeElements = document.querySelectorAll(
            '.home [data-reveal]'
        );

        const timers = [];

        homeElements.forEach((el, index) => {
            const timer = setTimeout(() => {
                el.classList.add('is-visible');
            }, index * 200);

            timers.push(timer);
        });

        return () => {
            timers.forEach(clearTimeout);
        };
    }, []);

    return (
        <section id="home" className="home">
            <div className="home-text">
                <h1 className="home-name" data-reveal>Mohamed Sheba</h1>
                <p className="home-title" data-reveal>Frontend Developer</p>
                <p className="home-desc" data-reveal>
                    I'm Mohamed — a Front-End Developer building clean, responsive, and user-friendly
                    websites. Currently sharpening my skills through the DEPI React track, with a solid
                    foundation in HTML, CSS and JavaScript
                    I care about turning designs into interfaces that just feel right to use.
                </p>

                <div className="home-buttons" data-reveal>
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>


                <div className="social-row" data-reveal>

                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener"
                            aria-label={link.name}>
                            {link.name === "linkedIn" && (
                                <svg viewBox="0 0 24 24" width="22" height="22">
                                    <path fill="currentColor"
                                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zm7.67 0h4.37v2.01h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.11h-4.56v-7.19c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8v7.32H7.89V8.24z" />
                                </svg>
                            )}

                            {link.name === "Github" && (
                                <svg viewBox="0 0 24 24" width="22" height="22">
                                    <path fill="currentColor"
                                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            )}

                            {link.name === "Email" && (
                                <svg viewBox="0 0 24 24" width="22" height="22">
                                    <path fill="currentColor"
                                        d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm19.4 2.3-9.4 7-9.4-7A1 1 0 0 1 3 6h18a1 1 0 0 1 .4.3zM2 8.2V18h20V8.2l-9.4 7a1 1 0 0 1-1.2 0L2 8.2z" />
                                </svg>
                            )}
                        </a>
                    ))}

                </div>
            </div>

            <div className="home-photo">
                <img src={homeImage} alt="Mohamed Sheba" />
            </div>
        </section>
    )
}