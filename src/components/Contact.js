import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>You can reach out via email or connect with me on LinkedIn.</p>
      <div className="contact-info">
        <a href="mailto:shaiksubani8446@gmail.com">📧 shaiksubani8446@gmail.com</a>
        <a
          href="https://www.linkedin.com/in/mabu-subani-shaik-330494213/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
