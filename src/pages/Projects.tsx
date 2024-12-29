import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
    <h2>Projetos</h2>
    <div className="projects-grid">
        <div className="project-card">
            <img src="link-para-imagem-1.jpg" alt="Projeto 1" className="project-image" />
            <h3>Projeto 1</h3>
            <p>Descrição breve do projeto...</p>
            <div className="project-link-container">
            <a href="link-para-deploy-1" className="project-link" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            <a href="link-para-repositorio-1" className="project-link" target="_blank" rel="noopener noreferrer">Repositório</a>
        </div>
        </div>
        <div className="project-card">
            <img src="link-para-imagem-2.jpg" alt="Projeto 2" className="project-image" />
            <h3>Projeto 2</h3>
            <p>Descrição breve do projeto...</p>
            <div className="project-link-container">
            <a href="link-para-deploy-2" className="project-link" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            <a href="link-para-repositorio-2" className="project-link" target="_blank" rel="noopener noreferrer">Repositório</a>
            </div>
        </div>
        <div className="project-card">
            <img src="link-para-imagem-3.jpg" alt="Projeto 3" className="project-image" />
            <h3>Projeto 3</h3>
            <p>Descrição breve do projeto...</p>
            <div className="project-link-container">
            <a href="link-para-deploy-3" className="project-link" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            <a href="link-para-repositorio-3" className="project-link" target="_blank" rel="noopener noreferrer">Repositório</a>
            </div>
        </div>
        <div className="project-card">
            <img src="link-para-imagem-4.jpg" alt="Projeto 4" className="project-image" />
            <h3>Projeto 4</h3>
            <p>Descrição breve do projeto...</p>
            <div className="project-link-container">
            <a href="link-para-deploy-4" className="project-link" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            <a href="link-para-repositorio-4" className="project-link" target="_blank" rel="noopener noreferrer">Repositório</a>
            </div>
        </div>
    </div>
</div>

    );
};

export default Projects;
