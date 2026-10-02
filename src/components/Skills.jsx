import SkillsCard from "./SkillsCard";

export default function Skills() {
    const cards = [
        { title: "Languages", tags: ["HTML", "CSS", "JavaScript", "Python", "C++"] },
        { title: "Web Development", tags: ["Responsive Design", "Problem Solving", "Clean Code", "UI Implementation"] },
        { title: "Tools", tags: ["Git", "GitHub", "VS Code", "Debugging"] }
    ]

    return (
        <section className="skills" id="skills">
            <h2 className="section-title" data-reveal>Skills</h2>

            <div className="skills-grid">
                {cards.map((card) => <SkillsCard key={card.title} {...card} />)}
            </div>
        </section>
    )
}