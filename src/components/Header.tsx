import React from 'react';
import './Header.css'; // Importa o arquivo de estilos para o Header.

const Header = () => {
    return (
        <header className="header">
            {/* Logo ou título do portfólio */}
            <h1 className="header-logo">- MHS /-</h1>

            {/* Barra de navegação */}
            <nav className="navbar">
                <ul className="nav-list">
                    {/* Links de navegação para as seções */}
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">Sobre</a></li>
                    <li><a href="#projects" className="nav-link">Projetos</a></li>
                    <li><a href="#contact" className="nav-link">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; // Exporta o componente para uso em outros arquivos.
