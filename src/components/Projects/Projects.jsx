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

  // Detect mobile viewport only (avoid DevTools touch emulation)
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentProject]);

  const nextProject = () => {
    setCurrentProject((prev) => {
      const next = (prev + 1) % projectsContent.projects.length;
      return next;
    });
  };

  const prevProject = () => {
    setCurrentProject((prev) => {
      const next = (prev - 1 + projectsContent.projects.length) % projectsContent.projects.length;
      return next;
    });
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const project = projectsContent.projects[currentProject];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {isMobile ? (
          <ProjectSlider 
            projects={projectsContent.projects}
            currentProject={currentProject}
            onProjectChange={goToProject}
            videoRef={videoRef}
          />
        ) : (
          <>
            <NavButton direction="prev" onClick={prevProject} />
            <ProjectCard project={project} isMobile={isMobile} videoRef={videoRef} isActive />
            <NavButton direction="next" onClick={nextProject} />
          </>
        )}
      </div>
      {!isMobile && (
        <ProjectDots 
          totalProjects={projectsContent.projects.length}
          currentProject={currentProject}
          onDotClick={goToProject}
        />
      )}
    </section>
  );
}

export default Projects; 