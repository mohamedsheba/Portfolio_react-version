import Portfolio from "../assets/Portfolio.png";
import MegaTech from "../assets/MegaTech.png";
import Lumière from "../assets/Lumière.png"
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
    
        {
            name: "MegaTech",
            imageUrl: MegaTech,
            desc: "A digital agency website concept for a company offering web development, UI/UX design, and marketing services. Built with a clean, minimal design without heavy distractions.",
            demoLink: "https://mohamedsheba.github.io/MegaTech-Agency/",
            repoLink: "https://github.com/mohamedsheba/MegaTech-Agency.git",
            tags: ["HTML", "CSS", "JavaScript"]
        },

        {
            name: "Personal Portfolio",
            imageUrl: Portfolio,
            desc: "A personal portfolio built with React to showcase my projects, skills, and experience. Features a modern dark UI, responsive layouts, and smooth animations for an engaging user experience.",
            demoLink: "#",
            repoLink: "#",
            tags: ["CSS", "JavaSript", "React"]
        },

        {
            name: "Lumière Restaurant",
            imageUrl: Lumière,
            desc: "A modern restaurant website focused on menu categories, and the restaurant’s identity through a clean and elegant design. Built with a responsive layout while maintaining the visual balance and overall experience across devices.",
            demoLink: "https://mohamedsheba.github.io/Lumiere-resturant/",
            repoLink: "https://github.com/mohamedsheba/Lumiere-resturant",
            tags: ["HTML", "CSS", "JavaScript"]
        }
    ]

    return (
        <section className="projects" id="projects">

            <div className="section-heading" data-reveal>
                <span className="section-eyebrow">SELECTED WORK</span>
                <h2 className="section-title">Projects & Experiments</h2>
                <p>
                    A collection of projects where I turn ideas into interactive, functional, and engaging web experiences.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => <ProjectCard key={project.name} {...project} />)}
            </div>
        </section>
    )
}