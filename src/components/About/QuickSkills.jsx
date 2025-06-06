function QuickSkills() {
  const skills = [
    { name: "React", description: "Frontend framework for building user interfaces" },
    { name: "Node.js", description: "JavaScript runtime for server-side development" },
    { name: "TypeScript", description: "Typed superset of JavaScript" },
    { name: "AWS", description: "Cloud computing platform and services" }
  ];

  return (
    <section className="quick-skills" role="region" aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="sr-only">Key Technical Skills</h3>
      <div className="skills-list" role="list" aria-label="Primary technical skills">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="skill-badge" 
            role="listitem"
            tabIndex="0"
            aria-label={`${skill.name}: ${skill.description}`}
            title={skill.description}
          >
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickSkills; 