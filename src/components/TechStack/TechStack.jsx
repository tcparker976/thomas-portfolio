import TechHeader from './TechHeader';
import TechPanels from './TechPanels';
import TechFooter from './TechFooter';
import techContent from '../../content/tech';

function TechStack() {
  return (
    <section 
      id="tech" 
      className="tech-section"
      role="region"
      aria-labelledby="tech-heading"
    >
      <div className="tech-container comic-dots-subtle" tabIndex="0">
        <TechHeader 
          title={techContent.title}
          subtitle={
            <>
              <span className="desktop-subtitle">Hover over any badge to learn more about my experience!</span>
              <span className="mobile-subtitle">Click on any badge to learn more about my experience!</span>
            </>
          }
        />
        
        <TechPanels categories={techContent.categories} />
        
        <TechFooter message={techContent.soMuchMore} />
      </div>
    </section>
  );
}

export default TechStack; 