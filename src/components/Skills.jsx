import SkillsCard from "./SkillsCard";

export default function Skills() {
    const cards = [
        {
            title: "Frontend Development",
            description: "Building responsive and interactive web interfaces with modern frontend technologies.",
            icon: "code",
            featured: true,
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Bootstrap",
                "Tailwind",
                "TypeScript"
            ]
        },
        {
            title: "CS Fundamentals",
            description: "Developing logical thinking and breaking down problems into clear, efficient solutions.",
            icon: "brain",
            tags: [
                "Problem Solving",
                "Data Structures",
                "Algorithms"
            ]
        },
        {
            title: "Development Workflow",
            description: "Managing project workflows, running development environments, and working with version control.",
            icon: "git",
            tags: [
                "Git",
                "GitHub",
                "Vite",
                "npm"
            ]
        },
        {
            title: "Software Engineering",
            description: "Creating reusable components and maintaining clean, organized code for easier updates and future improvements.",
            icon: "layers",
            wide: true,
            tags: [
                "Reusable Components",
                "Responsive Design",
                "Clean Code",
                "REST APIs"
            ]
        }
    ];

    return (
        <section className="skills" id="skills">
            <div className="section-heading" data-reveal>
                <span className="section-eyebrow">WHAT I WORK WITH</span>
                <h2 className="section-title">Skills & Technologies</h2>
                <p>
                    The technologies, tools, and concepts I use
                    to build web experiences.
                </p>
            </div>

            <div className="skills-grid">
                {cards.map((card) => (
                    <SkillsCard key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
}