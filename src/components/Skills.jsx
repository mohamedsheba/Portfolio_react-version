import SkillsCard from "./SkillsCard";

export default function Skills() {
    const cards = [
        {
            title: "Frontend Development",
            description: "Technologies I use to build modern web interfaces.",
            icon: "code",
            featured: true,
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Bootstrap",
                "Tailwind CSS",
                "TypeScript"
            ]
        },
        {
            title: "CS Fundamentals",
            description: "Problem solving and computational thinking.",
            icon: "brain",
            tags: [
                "Problem Solving",
                "Data Structures",
                "Algorithms"
            ]
        },
        {
            title: "Development Workflow",
            description: "Tools for building and managing projects.",
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
            description: "Writing organized and maintainable code.",
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
            <div className="skills-heading" data-reveal>
                <span className="skills-eyebrow">WHAT I WORK WITH</span>
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