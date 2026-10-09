
import { CodeXml, Cpu, Wrench, FolderCode } from "lucide-react";

const icons = {
    code: CodeXml,
    brain: Cpu,
    git: Wrench,
    layers: FolderCode,
};

export default function SkillsCard({
    title,
    description,
    icon,
    tags = [],
    featured = false,
    wide = false,
}) {
    const TypeIcon = icons[icon] ?? CodeXml;

    return (
        <article
            className={`skill-card ${
                featured ? "skill-card-featured" : ""
            } ${wide ? "skill-card-wide" : ""}`}
            data-reveal
        >
            <div className="skill-card-top">
                <div className="skill-card-heading">
                    <div className="skill-icon" aria-hidden="true">
                        <TypeIcon size={24} strokeWidth={1.8} />
                    </div>

                    <h3>{title}</h3>
                </div>
            </div>

            <p className="skill-description">{description}</p>

            <div className="tag-list">
                {tags.map((tag) => (
                    <span className="tag" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}