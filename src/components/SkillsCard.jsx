export default function SkillsCard({ title, tags }) {

    return (
        <div className="skill-card" data-reveal>
            <h3>{title}</h3>
            <div className="tag-list">
                {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
        </div>
    )
}