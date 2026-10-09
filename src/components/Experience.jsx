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

            <div className="section-heading" data-reveal>
                <span className="section-eyebrow">MY JOURNEY SO FAR</span>
                <h2 className="section-title">Experience & Growth</h2>
                <p>
                    A look at the experiences, learning opportunities, and milestones shaping my journey as a developer.
                </p>
            </div>

            {experiences.map((experience) => <ExperienceCard key={experience.title} {...experience} />)}

        </section>
    )
}