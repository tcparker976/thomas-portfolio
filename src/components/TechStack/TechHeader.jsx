function TechHeader({ title, subtitle }) {
  return (
    <header className="tech-header">
      <h2 id="tech-heading" aria-describedby="tech-subtitle">
        {title}
      </h2>
      <p 
        id="tech-subtitle" 
        className="tech-subtitle section-subtitle"
        role="doc-subtitle"
      >
        {subtitle}
      </p>
      <span className="sr-only">
        Technology stack organized by categories. Each technology includes experience level and usage details.
      </span>
    </header>
  );
}

export default TechHeader; 