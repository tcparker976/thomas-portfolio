import Badge from '../Badge';

function TechPanel({ categoryKey, category, index }) {
  return (
    <article 
      key={categoryKey} 
      className={`tech-panel tech-panel-${category.size}`}
      role="listitem"
      aria-labelledby={`panel-title-${categoryKey}`}
      tabIndex="0"
      data-category={categoryKey}
      data-size={category.size}
    >
      <header className="panel-header">
        <h3 
          id={`panel-title-${categoryKey}`}
          className="panel-title"
          aria-describedby={`panel-count-${categoryKey}`}
        >
          <span className="panel-icon" aria-hidden="true"></span>
          <span className="panel-title-text">{category.title}</span>
        </h3>
        <span 
          id={`panel-count-${categoryKey}`}
          className="sr-only"
        >
          {category.tools.length} technologies in this category
        </span>
      </header>
      
      <div 
        className="panel-content"
        role="list"
        aria-label={`${category.title} technologies`}
      >
        {category.tools.map((tool, toolIndex) => (
          <div 
            key={toolIndex}
            role="listitem"
            className="badge-wrapper"
          >
            <Badge 
              icon={tool.icon} 
              label={tool.label} 
              color={tool.color}
              tooltip={tool.tooltip}
              aria-describedby={`badge-desc-${categoryKey}-${toolIndex}`}
              tabIndex="0"
            />
            <span 
              id={`badge-desc-${categoryKey}-${toolIndex}`}
              className="sr-only"
            >
              {tool.label} - {tool.tooltip?.experience || 'Technology'} level experience
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default TechPanel; 