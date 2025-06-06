function TechFooter({ message }) {
  return (
    <footer className="tech-footer">
      <h4 
        className="so-much-more"
        role="doc-conclusion"
        tabIndex="0"
      >
        {message}
      </h4>
      <span className="sr-only">
        End of technology stack section. Continue to projects or contact information.
      </span>
    </footer>
  );
}

export default TechFooter; 