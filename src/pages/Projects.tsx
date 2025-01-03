import React from 'react';
import './Projects.css';
import projeto1 from '../assets/OIG.jpeg';

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição curta do projeto 1.",
    image: projeto1,
    github: "https://github.com/seu-usuario/projeto1",
    live: "https://link-do-projeto1",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição curta do projeto 2.",
    image: projeto1,
    github: "https://github.com/seu-usuario/projeto2",
    live: "https://link-do-projeto2",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição curta do projeto 3.",
    image: projeto1,
    github: "https://github.com/seu-usuario/projeto3",
    live: "https://link-do-projeto3",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição curta do projeto 4.",
    image: projeto1,
    github: "https://github.com/seu-usuario/projeto4",
    live: "https://link-do-projeto4",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição curta do projeto 5.",
    image: projeto1,
    github: "https://github.com/seu-usuario/projeto5",
    live: "https://link-do-projeto5",
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição curta do projeto 6.",
    image: projeto1,
    github: "https://github.com/seu-usuario/projeto6",
    live: "https://link-do-projeto6",
  },
  // Adicione mais projetos aqui
];

const Projects = () => {
    return (
      <section id="projects" className="projects">
        <h2 className="projects-title">Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-buttons">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">Ver Código</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn">Ver Projeto</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;
