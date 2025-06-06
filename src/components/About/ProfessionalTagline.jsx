function ProfessionalTagline() {
  return (
    <section className="professional-tagline" role="banner" aria-labelledby="tagline-title">
      <h2 className="tagline-title" id="tagline-title">Full-Stack Developer</h2>
      <p className="tagline-subtitle" aria-describedby="tagline-title">6 Years Building Scalable Solutions</p>
      <div className="profile-details" role="list" aria-label="Professional details">
        <div 
          className="availability-status" 
          role="listitem" 
          aria-label="Current availability status"
          tabIndex="0"
        >
          <span className="status-dot" role="img" aria-label="Available indicator">🟢</span>
          <span className="status-text">Open to Opportunities</span>
        </div>
        <div 
          className="location-info" 
          role="listitem" 
          aria-label="Work location preference"
          tabIndex="0"
        >
          <span className="location-icon" role="img" aria-label="Location">📍</span>
          <span className="location-text">Available Remotely</span>
        </div>
        <div 
          className="timezone-info" 
          role="listitem" 
          aria-label="Time zone information"
          tabIndex="0"
        >
          <span className="timezone-icon" role="img" aria-label="Time zone">🕐</span>
          <span className="timezone-text">
            <abbr title="Pacific Standard Time / Pacific Daylight Time" tabIndex="0">PST/PDT</abbr> (UTC-8/-7)
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalTagline; 