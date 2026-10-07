const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1 className="hero-title">
          Zaccheaus Omodara
        </h1>

        <h2 className="hero-role">
          Software Engineer & Full-Stack Developer
        </h2>

        <p className="hero-description">
          I build practical, user-focused web applications using modern
          technologies like JavaScript, React, Node.js, Express, and PostgreSQL.
          I'm also exploring AI integration to build smarter software solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View My Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
