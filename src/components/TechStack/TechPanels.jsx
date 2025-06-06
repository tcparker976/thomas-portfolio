import TechPanel from './TechPanel';

function TechPanels({ categories }) {
  return (
    <div 
      className="tech-panels"
      role="list"
      aria-label="Technology categories"
    >
      {Object.entries(categories).map(([key, category], index) => (
        <TechPanel 
          key={key}
          categoryKey={key}
          category={category}
          index={index}
        />
      ))}
    </div>
  );
}

export default TechPanels; 