import React from 'react';

function Projects() {
  const projects = [
    { id: 1, title: 'Portfolio', description: 'This website is a project I created to showcase my skills and other things that I am working on. I undertook this project to learn more about React and UI/UX design.' },
    { id: 2, title: 'Secure Messaging Application', description: 'This is a secure messaging application that I am developing with Hudson I.T. Consulting to support a Learning Behavioral Center.' },
    { id: 3, title: 'Dad Joke Provider', description: 'This is a dad joke provider that I am working on in my own time to elarn more about Kubernetes and Microserivces.' },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
