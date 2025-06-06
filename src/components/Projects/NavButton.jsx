import React from 'react';

const NavButton = ({ direction, onClick }) => (
  <button 
    className={`nav-button ${direction}`} 
    onClick={onClick} 
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} project`}
  >
    <div className={`css-arrow ${direction}`}>
      <span className="sr-only">
        {direction === 'prev' ? 'Previous' : 'Next'} project
      </span>
    </div>
  </button>
);

export default NavButton; 