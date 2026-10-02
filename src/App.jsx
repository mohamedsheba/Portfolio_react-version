import "./index.css"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
	return (
		<>
			<Navbar logo="Mohamed" />
			<Hero />
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