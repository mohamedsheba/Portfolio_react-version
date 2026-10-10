export default function ExperienceCard({ status, title, organization, date, description }) {

    return (
        <div className="experience-card" data-reveal>

            <div className="experience-info">
                <span className="tag experience-status">
                    <span className="status-dot"></span>
                    {status}
                </span>
                <h3>{title}</h3>
                <p className="experience-org">{organization}</p>
                <p className="experience-date">{date}</p>
            </div>

            <div className="experience-desc">
                <p>{description}</p>
            </div>

        </div>
    )
}