import React from 'react';
import './Home.css';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, FaJsSquare, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">Marcos Henrique</h1>
        <p className="home-tagline">Desenvolvedor Full Stack em Construção</p>
      </div>
      <div className="tech-icons">
        <div className="tech-icon">
          <FaReact size={50} />
          <span className="tech-name">React</span>
        </div>
        <div className="tech-icon">
          <FaHtml5 size={50} />
          <span className="tech-name">HTML</span>
        </div>
        <div className="tech-icon">
          <FaCss3Alt size={50} />
          <span className="tech-name">CSS</span>
        </div>
        <div className="tech-icon">
          <FaGithub size={50} />
          <span className="tech-name">GitHub</span>
        </div>
        <div className="tech-icon">
          <FaNodeJs size={50} />
          <span className="tech-name">Node.js</span>
        </div>
        <div className="tech-icon">
          <FaJsSquare size={50} />
          <span className="tech-name">JavaScript</span>
        </div>
        <div className="tech-icon">
          <SiNextdotjs size={50} />
          <span className="tech-name">Next.js</span>
        </div>
        <div className="tech-icon">
          <SiTypescript size={50} />
          <span className="tech-name">TypeScript</span>
        </div>
      
        <div className="tech-icon">
          <FaGitAlt size={50} />
          <span className="tech-name">Git</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
