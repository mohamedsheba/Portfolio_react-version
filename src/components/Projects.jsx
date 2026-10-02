import MaisonSoliel from "../assets/Maison Soleil.png";
import MegaTech from "../assets/MegaTech.png";
import Lumière from "../assets/Lumière.png"
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            name: "Maison Soleil",
            imageUrl: MaisonSoliel,
            desc: "A booking confirmation dashboard for a boutique guesthouse. Focused on matching the original UI design precisely while making it fully responsive across devices.",
            demoLink : "https://mohamedsheba.github.io/Maison-Soleil/",
            repoLink : "https://github.com/mohamedsheba/Maison-Soleil",
            tags : ["HTML", "CSS"]
        },

        {
            name: "MegaTech",
            imageUrl: MegaTech,
            desc: "A digital agency website concept for a company offering web development, UI/UX design, and marketing services. Built with a clean, minimal design without heavy distractions.",
            demoLink : "https://mohamedsheba.github.io/MegaTech-Agency/",
            repoLink : "https://github.com/mohamedsheba/MegaTech-Agency.git",
            tags : ["HTML", "CSS", "JavaScript"]
        },
        
        {
            name: "Lumière Restaurant",
            imageUrl: Lumière,
            desc: "A modern restaurant website focused on menu categories, and the restaurant’s identity through a clean and elegant design. Built with a responsive layout while maintaining the visual balance and overall experience across devices.",
            demoLink : "https://mohamedsheba.github.io/Lumiere-resturant/",
            repoLink : "https://github.com/mohamedsheba/Lumiere-resturant",
            tags : ["HTML", "CSS", "JavaScript"]
        }
    ]

    return (
        <section className="projects" id="projects">
            <h2 className="section-title" data-reveal>Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => <ProjectCard key={project.name} {...project}/>)}
            </div>
        </section>
    )
}