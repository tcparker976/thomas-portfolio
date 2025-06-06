import React, { useState, useEffect, useRef } from 'react';
import projectsContent from '../../content/projects';
import ProjectCard from './ProjectCard';
import NavButton from './NavButton';
import ProjectDots from './ProjectDots';
import ProjectSlider from './ProjectSlider';

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 600 || 
                    ('ontouchstart' in window) || 
                    (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      console.log('Video source updated:', projectsContent.projects[currentProject].video);
    }
  }, [currentProject]);

  const nextProject = () => {
    setCurrentProject((prev) => {
      const next = (prev + 1) % projectsContent.projects.length;
      console.log('Next project video:', projectsContent.projects[next].video);
      return next;
    });
  };

  const prevProject = () => {
    setCurrentProject((prev) => {
      const next = (prev - 1 + projectsContent.projects.length) % projectsContent.projects.length;
      console.log('Previous project video:', projectsContent.projects[next].video);
      return next;
    });
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const project = projectsContent.projects[currentProject];

  return (
    <section id="projects" className="projects-section">
      {isMobile ? (
        // Mobile: Use slider with swipe functionality
        <ProjectSlider 
          projects={projectsContent.projects}
          currentProject={currentProject}
          onProjectChange={goToProject}
          videoRef={videoRef}
        />
      ) : (
        // Desktop: Use original navigation with arrows
        <>
          <div className="projects-container">
            <NavButton direction="prev" onClick={prevProject} />
            <ProjectCard project={project} videoRef={videoRef} />
            <NavButton direction="next" onClick={nextProject} />
          </div>
          <ProjectDots 
            currentProject={currentProject}
            onDotClick={goToProject}
          />
        </>
      )}
    </section>
  );
}

export default Projects; 