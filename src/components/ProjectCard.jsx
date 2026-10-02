export default function ProjectCard({ name, imageUrl, desc, demoLink, repoLink, tags }) {

    return (
        <div className="project-card" data-reveal>

            <div className="project-image">
                <img src={imageUrl} alt={`${name} project screenshot`} />
            </div>

            <div className="project-body">
                <h3 className="project-title">{name}</h3>
                <p>{desc}</p>

                <div className="tag-list">
                    {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>

                <div className="project-links">
                    <a
                        href={demoLink}
                        className="btn btn-small btn-primary"
                        target="_blank"
                        rel="noopener">
                        Live Demo
                    </a>
                    
                    <a
                        href={repoLink}
                        className="btn btn-small btn-secondary"
                        target="_blank"
                        rel="noopener">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}