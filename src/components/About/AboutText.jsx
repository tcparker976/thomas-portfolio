import aboutContent from '../../content/about';

function AboutText() {
  return (
    <section 
      className="about-text-container comic-dots-subtle" 
      role="region" 
      aria-labelledby="about-heading"
      tabIndex="0"
    >
      <h2 id="about-heading">{aboutContent.title}</h2>
      <div role="list" aria-label="About me details">
        {aboutContent.paragraphs.map((paragraph, index) => (
          <p 
            key={index}
            role="listitem"
            tabIndex="0"
            aria-describedby={index === 0 ? "about-heading" : undefined}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutText; 