const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <p>
        Here are some of the projects I've built while developing my
        software engineering skills.
      </p>

      <div className="projects-container">

        <div className="project-card">
          <h3>PostgreSQL Task Manager</h3>

          <p>
            A full-stack task management application that allows users to
            create, view, update, and delete tasks. The application uses
            PostgreSQL for persistent data storage and demonstrates
            server-side development with Express and EJS.
          </p>

          <p>
            <strong>Technologies:</strong> Node.js, Express.js, EJS,
            PostgreSQL
          </p>

          <a
            href="https://github.com/omodara-zac/postgresql-task-manager"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>E-Commerce Website</h3>

          <p>
            A full-stack e-commerce web application designed to provide
            users with a simple and functional online shopping experience.
            The application includes product management, shopping cart
            functionality, and database integration.
          </p>

          <p>
            <strong>Technologies:</strong> Node.js, Express.js, EJS,
            PostgreSQL, Bootstrap
          </p>

          <a
            href="https://github.com/omodara-zac/e-commerce"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

      </div>

      <div className="more-projects">
        <a
          href="https://github.com/omodara-Zac"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;