import React from 'react';
import './About.css';
import minhaFoto from '../assets/foto-perfil.jpeg';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <img src={minhaFoto} alt="Foto de Marcos Henrique" className="about-image" />
                <div className="about-text">
                    <h2>Sobre Mim</h2>
                    <p>
                        Sou um desenvolvedor apaixonado por criar soluções criativas e eficientes. Tenho experiência em
                        tecnologias como React, Node.js, e TypeScript.
                    </p>
                    <div className="download-cv">
    <a href="./Marcos_Henrique_Curriculo.pdf" download="Marcos_Henrique_Curriculo.pdf">
        Saiba mais sobre mim 
    </a>
</div>

                </div>
            </div>
        </section>
    );
};

export default About;
