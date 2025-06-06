import { useState, useEffect, useRef } from 'react';

function Badge({ icon, label, color = '#4D4D4D', tooltip }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  // Detect mobile device - more precise detection
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 600;
      setIsMobile(isTouchDevice && isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getExperienceClass = (experience) => {
    switch (experience?.toLowerCase()) {
      case 'expert':
        return 'experience-expert';
      case 'advanced':
        return 'experience-advanced';
      case 'intermediate':
        return 'experience-intermediate';
      default:
        return 'experience-default';
    }
  };

  const showTooltipHandler = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowTooltip(true);
  };

  const hideTooltipHandler = () => {
    if (isMobile) {
      // Auto-hide after 2.5 seconds on mobile for better readability
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 2500);
    } else {
      setShowTooltip(false);
    }
  };

  const handleMobileTouch = (e) => {
    if (isMobile) {
      e.preventDefault();
      if (showTooltip) {
        setShowTooltip(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      } else {
        showTooltipHandler();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showTooltipHandler();
    } else if (e.key === 'Escape') {
      setShowTooltip(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const handleKeyUp = (e) => {
    if (!isMobile && (e.key === 'Enter' || e.key === ' ')) {
      hideTooltipHandler();
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`badge-container ${isMobile ? 'badge-mobile' : ''}`}
      data-mobile={isMobile}
      style={isMobile && showTooltip ? { zIndex: 1000000, position: 'relative' } : {}}
      onMouseEnter={!isMobile ? showTooltipHandler : undefined}
      onMouseLeave={!isMobile ? hideTooltipHandler : undefined}
      onClick={isMobile ? handleMobileTouch : undefined}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex="0"
      role="button"
      aria-label={`${label} technology badge`}
      aria-describedby={showTooltip ? `tooltip-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined}
      aria-expanded={showTooltip}
      aria-haspopup="true"
    >
      <div 
        className="badge" 
        style={{ 
          backgroundColor: color,
          color: '#FFFFFF'
        }}
      >
        <img 
          src={icon} 
          alt="" 
          className="badge-icon"
          loading="lazy"
        />
        <span className="badge-label">{label}</span>
      </div>
      
      {tooltip && showTooltip && (
        <div 
          id={`tooltip-${label.replace(/\s+/g, '-').toLowerCase()}`}
          className={`tooltip ${isMobile ? 'tooltip-mobile' : ''}`}
          role="tooltip"
          aria-live="polite"
        >
          <div className="tooltip-header">
            <span className="tooltip-title">{label}</span>
            <span className={`tooltip-experience ${getExperienceClass(tooltip.experience)}`}>
              {tooltip.experience}
            </span>
          </div>
          <div className="tooltip-content">
            <div className="tooltip-row">
              <span className="tooltip-label">Experience:</span>
              <span className="tooltip-value">{tooltip.years}</span>
            </div>
            <div className="tooltip-row">
              <span className="tooltip-label">Projects:</span>
              <span className="tooltip-value">{tooltip.projects}</span>
            </div>
            <div className="tooltip-description">
              {tooltip.description}
            </div>
          </div>
          {isMobile && (
            <div className="tooltip-mobile-hint">
              <span className="sr-only">Tap to close tooltip</span>
              <span className="mobile-close-icon" aria-hidden="true">✕</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Badge; 