import { useEffect, useState } from "react"

export default function Navbar({ logo }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ]

    function updateActiveLinks() {
        const sections = document.querySelectorAll("section[id]")

        sections.forEach((section) => {
            const offset = window.innerHeight * 0.4
            const rect = section.getBoundingClientRect()
            if (rect.top <= offset && rect.bottom > offset) {
                setActiveSection(section.getAttribute("id"))
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        });
    }, [])

    useEffect(() => {
        updateActiveLinks()

        window.addEventListener("scroll", updateActiveLinks)

        return() => {
            window.removeEventListener("scroll", updateActiveLinks)
        }
    }, [])

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
            <div className="navbar-inner">
                <a href="#" className="logo">&lt;<span>{logo}</span>/&gt;</a>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">

                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.name.toLowerCase() ? "active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="menu-toggle"
                    id="menuToggle"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)
                    }>
                    <span>{menuOpen ? "✕" : "☰"}</span>
                </button>
            </div>
        </nav>
    )
}