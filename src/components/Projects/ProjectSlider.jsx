import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import projectsContent from '../../content/projects';

// Constants for better maintainability
const SWIPE_THRESHOLD = 0.15; // 15% of screen width
const ANIMATION_DURATION = 300;
const VELOCITY_THRESHOLD = 0.5;
const RESIZE_DEBOUNCE_MS = 150;

function ProjectSlider({ projects, currentProject, onProjectChange, videoRef }) {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  
  // Core state
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Touch tracking state
  const [touchState, setTouchState] = useState({
    startX: 0,
    currentX: 0,
    startTime: 0,
    lastMoveTime: 0,
    velocity: 0
  });
  
  // Animation state
  const [translateX, setTranslateX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoized calculations
  const swipeProgress = useMemo(() => {
    if (projects.length <= 1) return 0;
    return (currentProject / (projects.length - 1)) * 100;
  }, [currentProject, projects.length]);

  const canSwipeLeft = currentProject > 0;
  const canSwipeRight = currentProject < projects.length - 1;

  // Debounced mobile viewport detection (avoid DevTools touch emulation)
  const checkMobile = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
    }, RESIZE_DEBOUNCE_MS);
  }, []);

  // Initialize mobile detection
  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [checkMobile]);

  // Sync translateX with currentProject
  useEffect(() => {
    const newTranslateX = -currentProject * 100;
    setTranslateX(newTranslateX);
    
    if (trackRef.current && !isDragging) {
      trackRef.current.style.transform = `translateX(${newTranslateX}%)`;
    }
  }, [currentProject, isDragging]);

  // Calculate velocity for momentum scrolling
  const calculateVelocity = useCallback((currentTime, currentX) => {
    const timeDelta = currentTime - touchState.lastMoveTime;
    const positionDelta = currentX - touchState.currentX;
    
    if (timeDelta > 0) {
      return positionDelta / timeDelta;
    }
    return 0;
  }, [touchState.lastMoveTime, touchState.currentX]);

  // Improved touch start handler
  const handleStart = useCallback((clientX) => {
    if (!isMobile || isAnimating) return;
    
    const now = Date.now();
    setIsDragging(true);
    setTouchState({
      startX: clientX,
      currentX: clientX,
      startTime: now,
      lastMoveTime: now,
      velocity: 0
    });
    
    // Cancel any ongoing animations
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
  }, [isMobile, isAnimating]);

  // Enhanced touch move handler with velocity tracking
  const handleMove = useCallback((clientX) => {
    if (!isDragging || !isMobile || isAnimating) return;

    const now = Date.now();
    const velocity = calculateVelocity(now, clientX);
    
    setTouchState(prev => ({
      ...prev,
      currentX: clientX,
      lastMoveTime: now,
      velocity
    }));

    const deltaX = clientX - touchState.startX;
    const dragProgress = deltaX / window.innerWidth;
    const newTranslateX = translateX + (dragProgress * 100);
    
    // Apply resistance at boundaries
    let resistedTranslateX = newTranslateX;
    const maxTranslate = 0;
    const minTranslate = -(projects.length - 1) * 100;
    
    if (newTranslateX > maxTranslate) {
      const overscroll = newTranslateX - maxTranslate;
      resistedTranslateX = maxTranslate + (overscroll * 0.3);
    } else if (newTranslateX < minTranslate) {
      const overscroll = minTranslate - newTranslateX;
      resistedTranslateX = minTranslate - (overscroll * 0.3);
    }
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${resistedTranslateX}%)`;
    }
  }, [isDragging, isMobile, isAnimating, calculateVelocity, touchState.startX, translateX, projects.length]);

  // Smart swipe detection with momentum
  const handleEnd = useCallback(() => {
    if (!isDragging || !isMobile) return;

    setIsDragging(false);
    setIsAnimating(true);
    
    const deltaX = touchState.currentX - touchState.startX;
    const swipeDistance = Math.abs(deltaX);
    const swipeVelocity = Math.abs(touchState.velocity);
    const threshold = window.innerWidth * SWIPE_THRESHOLD;
    
    let newProject = currentProject;
    
    // Determine swipe direction and intent
    const isSignificantSwipe = swipeDistance > threshold || swipeVelocity > VELOCITY_THRESHOLD;
    
    if (isSignificantSwipe) {
      if (deltaX > 0 && canSwipeLeft) {
        // Swipe right - go to previous project
        newProject = currentProject - 1;
      } else if (deltaX < 0 && canSwipeRight) {
        // Swipe left - go to next project  
        newProject = currentProject + 1;
      }
    }
    
    // Animate to final position
    const finalTranslateX = -newProject * 100;
    setTranslateX(finalTranslateX);
    
    if (trackRef.current) {
      trackRef.current.style.transition = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      trackRef.current.style.transform = `translateX(${finalTranslateX}%)`;
      
      // Clear animation flag after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    }
    
    if (newProject !== currentProject) {
      onProjectChange(newProject);
    }
  }, [isDragging, isMobile, touchState, currentProject, canSwipeLeft, canSwipeRight, onProjectChange]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    // Only prevent default if we're handling the touch
    if (e.touches.length === 1) {
      handleStart(e.touches[0].clientX);
    }
  }, [handleStart]);

  const handleTouchMove = useCallback((e) => {
    if (isDragging && e.touches.length === 1) {
      // Only prevent scrolling when actively dragging
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Mouse events for desktop testing
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    handleStart(e.clientX);
  }, [handleStart]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      handleEnd();
    }
  }, [isDragging, handleEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleEnd();
    }
  }, [isDragging, handleEnd]);

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (isAnimating) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        if (canSwipeLeft) {
          e.preventDefault();
          onProjectChange(currentProject - 1);
        }
        break;
      case 'ArrowRight':
        if (canSwipeRight) {
          e.preventDefault();
          onProjectChange(currentProject + 1);
        }
        break;
      case 'Home':
        if (currentProject !== 0) {
          e.preventDefault();
          onProjectChange(0);
        }
        break;
      case 'End':
        if (currentProject !== projects.length - 1) {
          e.preventDefault();
          onProjectChange(projects.length - 1);
        }
        break;
    }
  }, [isAnimating, canSwipeLeft, canSwipeRight, currentProject, projects.length, onProjectChange]);

  // Dot indicator click handler
  const handleDotClick = useCallback((index) => {
    if (index !== currentProject && !isAnimating) {
      onProjectChange(index);
    }
  }, [currentProject, isAnimating, onProjectChange]);

  // Don't render on desktop
  if (!isMobile) {
    return null;
  }

  return (
    <div className="projects-slider-container">
      {/* Projects Header for Mobile */}
      <div className="projects-header-mobile">
        <h2>{projectsContent.title}</h2>
        <p className="projects-subtitle-mobile">{projectsContent.subtitle}</p>
      </div>

      {/* Swipe Hint for Mobile Users */}
      <div className="swipe-hint" role="region" aria-label="Swipe navigation hint">
        <div className="swipe-hint-content">
          <span className="swipe-icon" aria-hidden="true">👈</span>
          <span className="swipe-text">Swipe to explore projects</span>
          <span className="swipe-icon" aria-hidden="true">👉</span>
        </div>
        
        {/* Progress Bar */}
        <div 
          className="slider-progress" 
          role="progressbar" 
          aria-label="Project progress"
          aria-valuenow={currentProject + 1}
          aria-valuemin={1}
          aria-valuemax={projects.length}
        >
          <div 
            className="slider-progress-bar"
            style={{ width: `${swipeProgress}%` }}
          />
        </div>
      </div>

      {/* Main Slider */}
      <div 
        className={`projects-slider ${isDragging ? 'dragging' : ''}`}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`Project slider, showing project ${currentProject + 1} of ${projects.length}`}
        aria-live="polite"
      >
        <div 
          className="projects-track"
          ref={trackRef}
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isDragging ? 'none' : `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id || index}
              className="project-slide"
              aria-hidden={index !== currentProject}
            >
              <ProjectCard 
                isMobile={isMobile}
                project={project}
                videoRef={index === currentProject ? videoRef : null}
                isActive={index === currentProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="slider-indicators" role="tablist" aria-label="Project navigation">
        {projects.map((project, index) => (
          <button
            key={project.id || index}
            className={`slider-dot ${index === currentProject ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            disabled={isAnimating}
            role="tab"
            aria-selected={index === currentProject}
            aria-label={`Go to project ${index + 1}: ${project.title || `Project ${index + 1}`}`}
            tabIndex={index === currentProject ? 0 : -1}
          />
        ))}
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isAnimating ? 'Navigating...' : `Project ${currentProject + 1} of ${projects.length}: ${projects[currentProject]?.title}`}
      </div>
    </div>
  );
}

export default ProjectSlider; 