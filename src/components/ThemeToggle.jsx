import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      const nextTheme = savedTheme === 'dark' ? 'dark' : 'light';
      setIsDark(nextTheme === 'dark');
      document.documentElement.setAttribute('data-theme', nextTheme);
    } else if (prefersDark) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-container">
        <div className="toggle-icon">
          {isDark ? '☀️' : '🌙'}
        </div>
        <div className="toggle-text">
          {isDark ? 'LIGHT' : 'DARK'}
        </div>
        <div className="comic-effect">
          {isDark ? 'SHINE!' : 'NIGHT!'}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 