import contactContent from '../content/contact';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container comic-dots-subtle">
        <h2>{contactContent.title}</h2>
        <p>{contactContent.subtitle}</p>
        <div className="contact-methods">
          {contactContent.methods.map((method, index) => (
            <a
              key={index}
              href={method.url}
              target={method.external ? "_blank" : "_self"}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="contact-method"
              aria-label={method.ariaLabel}
            >
              <img src={method.icon} alt="" className="contact-icon" />
              <div className="contact-info">
                <h3>{method.label}</h3>
                <p>{method.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact; 