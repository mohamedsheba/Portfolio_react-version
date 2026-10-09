import AboutCard from "./AboutCard"

export default function About() {
    const aboutCards = [
        {
            numCard: 2,
            title: "Currently Focusing On",
            description: "Building responsive interfaces and deepening my understanding of React, reusable components, and modern frontend practices."
        },

        {
            numCard: 3,
            title: "My Approach",
            description: "I focus on clean, maintainable code, consistent design, and the small details that make interfaces easier to use."
        },

        {
            numCard: 4,
            title: "Why Frontend",
            description: "I enjoy combining logical problem-solving with creativity and seeing ideas come to life in the browser."
        },

        {
            numCard: 5,
            title: "What I'm Looking For",
            description: "Opportunities to contribute to real-world projects, learn from experienced developers, and grow as a frontend developer."
        }
    ]

    return (
        <section className="about" id="about">
            <div className="section-heading" data-reveal>
                <span className="section-eyebrow">A LITTLE ABOUT ME</span>
                <h2 className="section-title">Beyond the Code</h2>
                <p>
                    A glimpse into who I am, how I think, and what drives me as a developer.
                </p>
            </div>

            <div className="about-grid">
                <div className="about-card-1 about-card" data-reveal>
                    <p>
                        I'm Mohamed, a frontend developer focused on building responsive, user-friendly web interfaces.
                        I enjoy turning designs into functional experiences while improving my skills in React, component-based development, and clean code.
                    </p>
                </div>

                {aboutCards.map((card) => <AboutCard key={card.numCard} {...card} />)}

            </div>

        </section>
    )
}