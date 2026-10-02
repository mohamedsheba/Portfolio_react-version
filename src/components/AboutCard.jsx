export default function AboutCard( {numCard, title, description} ) {
    
    return (
        <div className={`about-card-${numCard} about-card`} data-reveal>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}