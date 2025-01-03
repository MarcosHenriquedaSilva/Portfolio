import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Marcos Henrique</h1>
        <p className="hero-tagline">Desenvolvedor Full Stack em Construção</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Projetos</a>
          <a href="#contact" className="btn btn-secondary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};
