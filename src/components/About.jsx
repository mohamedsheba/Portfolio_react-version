import AboutCard from "./AboutCard"

export default function About() {
    const aboutCards = [
        {
            numCard: 2,
            title: "Currently Focusing On",
            description: "Improving my React skills and building responsive interfaces with reusable components."
        },

        {
            numCard: 3,
            title: "My Approach",
            description: "I value clean code, attention to detail, and consistent user experiences."
        },

        {
            numCard: 4,
            title: "Why Frontend",
            description: "I enjoy combining logic and creativity to bring ideas to life in the browser."
        },

        {
            numCard: 5,
            title: "What I'm Looking For",
            description: "Real-world projects where I can contribute, gain experience, and grow as a developer."
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
                        I'm Mohamed, a Frontend Developer passionate about building clean, responsive, and user-friendly interfaces.
                        I enjoy turning designs into functional experiences while paying attention to detail and usability.
                    </p>
                </div>

                {aboutCards.map((card) => <AboutCard key={card.numCard} {...card} />)}

            </div>

        </section>
    )
}