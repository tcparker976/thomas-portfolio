import { useState, useEffect, useCallback, useMemo } from 'react';

function ComicGraphic() {
  const quotes = useMemo(() => [
    "CODE!",
    "DEBUG!",
    "DEPLOY!",
    "BUILD!",
    "COMMIT!"
  ], []);

  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.comic-graphic');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Quote rotation with reduced motion support
  useEffect(() => {
    if (prefersReducedMotion || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes.length, prefersReducedMotion, isVisible]);

  const handleQuoteClick = useCallback(() => {
    if (!prefersReducedMotion) {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }
  }, [quotes.length, prefersReducedMotion]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleQuoteClick();
    }
  }, [handleQuoteClick]);

  return (
    <section 
      className="comic-graphic" 
      role="img" 
      aria-labelledby="comic-description"
      aria-live="polite"
    >
      <div id="comic-description" className="sr-only">
        Interactive comic-style graphic showing coding-related animations and rotating motivational text
      </div>
      
      <svg 
        viewBox="0 0 300 400" 
        className={`comic-svg ${prefersReducedMotion ? 'reduced-motion' : ''}`}
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        {/* Background with halftone pattern */}
        <defs>
          <pattern id="halftone" patternUnits="userSpaceOnUse" width="8" height="8">
            <circle cx="4" cy="4" r="1.5" fill="currentColor" opacity="0.1"/>
          </pattern>
          <pattern id="halftone2" patternUnits="userSpaceOnUse" width="12" height="12">
            <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.05"/>
          </pattern>
        </defs>
        
        {/* Main background */}
        <rect 
          width="300" 
          height="400" 
          fill="var(--card-bg)" 
          stroke="var(--card-border)" 
          strokeWidth="4" 
          rx="15"
        />
        <rect width="300" height="400" fill="url(#halftone)" rx="15"/>
        <rect width="300" height="400" fill="url(#halftone2)" rx="15"/>
        
        {/* Code symbols floating around */}
        <g 
          className={`floating-symbols ${prefersReducedMotion ? 'static' : ''}`}
          role="presentation"
          aria-hidden="true"
        >
          <text x="50" y="80" fontSize="24" fill="var(--text-color)" fontFamily="monospace" opacity="0.3">&lt;/&gt;</text>
          <text x="200" y="120" fontSize="20" fill="var(--text-color)" fontFamily="monospace" opacity="0.3">{`{}`}</text>
          <text x="80" y="180" fontSize="18" fill="var(--text-color)" fontFamily="monospace" opacity="0.3">( )</text>
          <text x="220" y="220" fontSize="22" fill="var(--text-color)" fontFamily="monospace" opacity="0.3">[ ]</text>
          <text x="60" y="280" fontSize="16" fill="var(--text-color)" fontFamily="monospace" opacity="0.3">===</text>
          <text x="180" y="320" fontSize="20" fill="var(--text-color)" fontFamily="monospace" opacity="0.3">=&gt;</text>
        </g>
        
        {/* Corner decorations */}
        <g role="presentation" aria-hidden="true">
          <rect x="10" y="10" width="20" height="20" fill="none" stroke="var(--card-border)" strokeWidth="3"/>
          <rect x="270" y="10" width="20" height="20" fill="none" stroke="var(--card-border)" strokeWidth="3"/>
          <rect x="10" y="370" width="20" height="20" fill="none" stroke="var(--card-border)" strokeWidth="3"/>
          <rect x="270" y="370" width="20" height="20" fill="none" stroke="var(--card-border)" strokeWidth="3"/>
        </g>
        
        {/* Speed lines for dynamic effect */}
        <g 
          className={`speed-lines ${prefersReducedMotion ? 'static' : ''}`} 
          opacity="0.4"
          role="presentation"
          aria-hidden="true"
        >
          <line x1="0" y1="50" x2="80" y2="50" stroke="var(--text-color)" strokeWidth="2"/>
          <line x1="0" y1="100" x2="60" y2="100" stroke="var(--text-color)" strokeWidth="2"/>
          <line x1="0" y1="150" x2="70" y2="150" stroke="var(--text-color)" strokeWidth="2"/>
          <line x1="220" y1="250" x2="300" y2="250" stroke="var(--text-color)" strokeWidth="2"/>
          <line x1="240" y1="300" x2="300" y2="300" stroke="var(--text-color)" strokeWidth="2"/>
          <line x1="230" y1="350" x2="300" y2="350" stroke="var(--text-color)" strokeWidth="2"/>
        </g>
      </svg>
      
      {/* Interactive text overlay */}
      <div className="rotating-text-overlay">
        <button
          className="text-container"
          onClick={handleQuoteClick}
          onKeyDown={handleKeyDown}
          aria-label={`Current motivational text: ${quotes[currentQuote]}. Click to change.`}
          tabIndex="0"
          type="button"
        >
          <span className="rotating-text" aria-live="polite">
            {quotes[currentQuote]}
          </span>
          <span className="interaction-hint sr-only">
            {!prefersReducedMotion && "Tap to change text"}
          </span>
        </button>
      </div>
    </section>
  );
}

export default ComicGraphic; 