import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'School Parent Portal',
    description: 'A web application for parents to track student attendance, marks, and reports.',
    link: 'https://github.com/yourusername/school-parent-portal'
  },
  {
    title: 'Weather App',
    description: 'Simple weather app using OpenWeatherMap API to display current conditions.',
    link: 'https://github.com/yourusername/weather-app'
  },
  {
    title: 'Portfolio Website',
    description: 'The current portfolio website built with React.',
    link: 'https://github.com/yourusername/portfolio-website'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
