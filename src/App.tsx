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
        </div>
    );
};

export default App;
