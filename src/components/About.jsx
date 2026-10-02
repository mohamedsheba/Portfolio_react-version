import AboutCard from "./AboutCard"

export default function About() {
    const aboutCards = [
        {
            numCard: 2,
            title: "Currently Focusing On",
            description: "Building responsive interfaces and strengthening my frontend fundamentals."
        },

        {
            numCard: 3,
            title: "My Approach",
            description: "I care about the small details and aim to turn designs into clean, accurate interfaces."
        },

        {
            numCard: 4,
            title: "Why Frontend",
            description: "I enjoy the mix of logic, creativity, and seeing ideas come to life in the browser."
        },

        {
            numCard: 5,
            title: "What I'm Looking For",
            description: "Opportunities to work on real-world projects, gain experience, and keep improving."
        }
    ]

    return (
        <section className="about" id="about">
            <h2 className="section-title" data-reveal>About Me</h2>

            <div className="about-grid">
                <div className="about-card-1 about-card" data-reveal>
                    <p>
                        I'm Mohamed, a Frontend Developer focused on building clean, responsive, and user-friendly web
                        experiences. I enjoy turning ideas and designs into functional interfaces, paying attention to both
                        the details and the overall experience.
                    </p>
                </div>

                {aboutCards.map((card) => <AboutCard key={card.numCard} {...card}/>)}

            </div>

        </section>
    )
}