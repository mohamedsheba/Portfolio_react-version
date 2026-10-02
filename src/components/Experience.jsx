import ExperienceCard from "./ExperienceCard"

export default function Experience() {
    const experiences = [
        {
            status: "Currently Training",
            title: "React Front-End Trainee",
            organization: "Digital Egypt Pioneers Initiative (DEPI)",
            date: "July 2026 – Present",
            description: "Training in modern frontend development — HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Tailwind and React, with hands-on practice in responsive design, Git/GitHub, and coding best practices."
        }
    ]

    return (
        <section className="experience" id="experience">
            <h2 className="section-title" data-reveal>Experience</h2>

            {experiences.map((experience) => <ExperienceCard key={experience.title} {...experience} />)}
        </section>
    )
}