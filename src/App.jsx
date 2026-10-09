import "./index.css"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { useEffect } from "react"

function App() {

	useEffect(() => {

		const revealElements = document.querySelectorAll(
			'[data-reveal]:not(.home [data-reveal])'
		);

		const revealObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 })

		revealElements.forEach((el) => revealObserver.observe(el))
	}, [])

	return (
		<>
			<Navbar logo="Mohamed" />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</>
	)
}

export default App