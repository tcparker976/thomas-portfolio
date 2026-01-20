import React from 'react';
import Badge from '../Badge';
import projectsContent from '../../content/projects';

const ProjectCard = ({ project, videoRef, isMobile, isActive = true }) => (
  <div className="project-card comic-dots-subtle">
    {/* Header with comic book styling */}
    {
      !isMobile && (
          <div className="project-header">
          <h2>{projectsContent.title}</h2>
          <p className="project-subtitle">{projectsContent.subtitle}</p>
          {project.featured && (
            <div className="featured-badge">
              <span className="featured-text">⭐ FEATURED ⭐</span>
            </div>
          )}
        </div>
      )
    }

    {/* Main project content */}
    <div className="project-content">
      {/* Video Demo - Now full width at top */}
      <div className="project-video">
        {isActive ? (
          <video 
            ref={videoRef}
            className="demo-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            poster="/assets/project_poster.svg"
            key={project.video}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="demo-video-placeholder" aria-hidden="true"></div>
        )}
        <div className="video-overlay">
          <span className="demo-label">🎬 LIVE DEMO</span>
        </div>
      </div>

      {/* Project Info - Two column layout */}
      <div className="project-info">
        {/* Left Column */}
        <div className="project-left-column">
          <div className="project-title-section">
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p className="project-description">{project.description}</p>
          </div>

          {/* Project Details Grid */}
          <div className="project-details-grid">
            <div className="detail-item">
              <span className="detail-label">👤 Role:</span>
              <span className="detail-value">{project.role}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">👥 Team:</span>
              <span className="detail-value">{project.teamSize}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">⏱️ Timeline:</span>
              <span className="detail-value">{project.timeline}</span>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="challenge-solution">
            <div className="challenge-bubble">
              <h5>💭 The Challenge</h5>
              <p>{project.challenge}</p>
            </div>
            <div className="solution-bubble">
              <h5>💡 The Solution</h5>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="project-right-column">
          {/* Outcomes with comic book styling */}
          <div className="outcomes-section">
            <h5>🎯 Key Outcomes</h5>
            <div className="outcomes-grid">
              {project.outcomes.slice(0, 2).map((outcome, index) => (
                <div key={index} className="outcome-bubble">
                  <span className="outcome-text">{outcome}</span>
                  <div className="pow-effect">POW!</div>
                </div>
              ))}
            </div>
            {project.outcomes.length > 2 && (
              <p className="outcomes-more">+ {project.outcomes.length - 2} more outcomes</p>
            )}
          </div>

          {/* Technology Stack */}
          <div className="tech-stack-section">
            <h5>🛠️ Tech Stack</h5>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  icon={tech.icon} 
                  label={tech.label} 
                  color={tech.color}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard; 