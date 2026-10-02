import {useState} from "react"

export default function Navbar({ logo }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        {name : "Home", href : "#hero"},
        {name : "About", href : "#about"},
        {name : "Skills", href : "#skills"},
        {name : "Projects", href : "#projects"},
        {name : "Experience", href : "#experience"},
        {name : "Contact", href : "#contact"}
    ]

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-inner">
                <a href="#" className="logo">&lt;<span>{logo}</span>/&gt;</a>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
                    
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>{link.name}</a>
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