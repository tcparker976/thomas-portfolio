import { useState } from 'react';

const socialLinks = [
  {
    href: "mailto:parkerthomas976@gmail.com",
    ariaLabel: "Send email to Thomas Parker",
    icon: "/assets/email.png",
    alt: "Email icon",
    label: "Email",
    description: "Send me an email"
  },
  {
    href: "https://github.com/tcparker976",
    ariaLabel: "View Thomas Parker's GitHub profile (opens in new tab)",
    icon: "/assets/github.png",
    alt: "GitHub icon",
    label: "GitHub",
    description: "View my code repositories"
  },
  {
    href: "https://www.linkedin.com/in/thomas-clifford-parker/",
    ariaLabel: "View Thomas Parker's LinkedIn profile (opens in new tab)",
    icon: "/assets/linkedin.png",
    alt: "LinkedIn icon",
    label: "LinkedIn",
    description: "Connect with me professionally"
  }
];

function SocialLinks() {
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const getIconFallback = (label) => {
    const fallbacks = {
      'Email': '✉️',
      'GitHub': '🐙',
      'LinkedIn': '💼'
    };
    return fallbacks[label] || '🔗';
  };

  return (
    <nav className="contacts-container" role="navigation" aria-label="Social media links">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className="contact-link" 
          aria-label={link.ariaLabel}
          title={link.description}
          target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          role="button"
          tabIndex="0"
        >
          {!imageErrors[index] ? (
            <img 
              src={link.icon} 
              alt={link.alt} 
              loading="lazy" 
              className={`social-contact-icon ${imageLoaded[index] ? 'loaded' : 'loading'}`}
              draggable="false"
              role="presentation"
              onError={() => handleImageError(index)}
              onLoad={() => handleImageLoad(index)}
            />
          ) : (
            <span 
              className="contact-icon-fallback" 
              role="img" 
              aria-label={link.alt}
              style={{
                fontSize: 'clamp(24px, 8vw, 32px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              {getIconFallback(link.label)}
            </span>
          )}
          <span className="sr-only">{link.description}</span>
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks; 