import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import './styles/global.css';

const App = () => {
  

  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div className="fixed-linkedin-button">
    <a href="https://www.linkedin.com/in/marcos-h-silva/" target="_blank" rel="noopener noreferrer">
     LinkedIn
    </a>
</div> 
      <div className="fixed-cv-button">
        <a href="./Marcos Henrique - Dev..pdf" download="Marcos Henrique - Dev..pdf">
          Baixar CV
        </a>
      </div>
    </div>
  );
};

export default App;
