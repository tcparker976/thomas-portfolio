import React from 'react';

const ProjectDots = ({ totalProjects, currentProject, onDotClick }) => (
  <div className="project-dots">
    {Array.from({ length: totalProjects }).map((_, index) => (
      <button
        key={index}
        className={`dot ${index === currentProject ? 'active' : ''}`}
        onClick={() => onDotClick(index)}
        aria-label={`Go to project ${index + 1}`}
      />
    ))}
  </div>
);

export default ProjectDots; 