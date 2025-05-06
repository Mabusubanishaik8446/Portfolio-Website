import React from 'react';
import './Hero.css'; // Add styles separately

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Subani</span></h1>
        <h2>Web Developer</h2>
        <p>I build modern, responsive websites and applications with a focus on performance and clean design.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
