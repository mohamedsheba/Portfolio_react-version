export default function Footer() {
    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <footer className="footer">
            <div className="footer-grid">

                <div className="footer-col">
                    <h4 className="logo">Mohamed Sheba</h4>
                    <p className="footer-tagline">Open to internships and freelance work</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>

                    {links.map((link) => <a key={link.name} href={link.href}>{link.name}</a>)}

                </div>

                <div className="footer-col">
                    <h4>Get in Touch</h4>
                    <a href="mailto:mohamed.sheba101@gmail.com">mohamed.sheba101@gmail.com</a>
                    <div className="social-row">
                        <a
                            href="https://www.linkedin.com/in/mohamed-sheba"
                            target="_blank"
                            rel="noopener"
                            aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor"
                                    d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zm7.67 0h4.37v2.01h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.11h-4.56v-7.19c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8v7.32H7.89V8.24z" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/mohamedsheba"
                            target="_blank"
                            rel="noopener"
                            aria-label="GitHub">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor"
                                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            href="https://wa.me/201004843072"
                            target="_blank"
                            rel="noopener"
                            aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor"
                                    d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.1 9 9.6 7.8 9.4 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.4C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.5 14.7 3 13.4 3 12c0-4.9 4.1-9 9-9s9 4.1 9 9-4.1 9-9 9z" />
                            </svg>
                        </a>

                        <a
                            href="/CV.pdf"
                            download="Mohamed-Sheba-Resume.pdf"
                            rel="noopener"
                            aria-label="Resume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-user preview-icon">
                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                                <path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M16 22a4 4 0 0 0-8 0" />
                                <circle cx="12" cy="15" r="3" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mohamed Sheba. All rights reserved.</p>
                <a href="#home" className="back-to-top">
                    Back to top <span aria-hidden="true">↑</span>
                </a>
            </div>
        </footer>
    )
}