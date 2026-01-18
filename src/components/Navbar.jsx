import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { scrollToSection } from '../utils/scrollUtils';
import navItems from '../content/nav';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownClick = (action) => {
    setActiveDropdown(activeDropdown === action ? null : action);
  };

  const handleNavClick = (item) => {
    if (item.isComingSoon) {
      // Do nothing for coming soon items
      return;
    }
    
    if (item.isDropdown) {
      handleDropdownClick(item.action);
    } else if (item.isExternal) {
      window.open(item.url, '_blank');
    } else {
      scrollToSection(item.action);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar" role="navigation" aria-label="Main navigation">
      <div className="nav-bar-inner">
        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="nav-toggle-icon" aria-hidden="true">
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </span>
          <span className="nav-toggle-text">{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
        <ul className={isMenuOpen ? 'is-open' : ''}>
        {navItems.map((item, index) => (
          <li key={index} className={`${item.isDropdown ? 'dropdown' : ''} ${item.isComingSoon ? 'coming-soon' : ''}`}>
            <button 
              onClick={() => handleNavClick(item)}
              aria-expanded={item.isDropdown ? activeDropdown === item.action : undefined}
              aria-haspopup={item.isDropdown ? "true" : undefined}
              className={item.isComingSoon ? 'coming-soon-button' : ''}
              disabled={item.isComingSoon}
              aria-label={item.isComingSoon ? `${item.label} - ${item.comingSoonLabel}` : item.label}
            >
              <span className="nav-label">
                {item.label}
                {item.isComingSoon && (
                  <span className="coming-soon-badge" aria-hidden="true">
                    {item.comingSoonLabel}
                  </span>
                )}
              </span>
            </button>
            {item.isDropdown && activeDropdown === item.action && (
              <div className="dropdown-menu" role="menu">
                {item.items.map((dropdownItem, idx) => (
                  <a
                    key={idx}
                    href={dropdownItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    role="menuitem"
                  >
                    <img src={dropdownItem.icon} alt="" className="dropdown-icon" />
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
          <li className="nav-theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;