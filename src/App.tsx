import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';

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

            {/* Botão fixo para baixar o CV */}
            <div className="fixed-cv-button">
                <a href="./Marcos Henrique - Dev..pdf" download="Marcos Henrique - Dev..pdf">
                    Baixar CV
                </a>
            </div>
        </div>
    );
};

export default App;
