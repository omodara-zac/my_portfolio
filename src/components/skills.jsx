const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <p>
        Technologies I use to build responsive, functional, and scalable web
        applications.
      </p>

      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>EJS</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Database</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Currently Exploring</h3>
          <ul>
            <li>AI Integration</li>
            <li>TypeScript</li>
            <li>AI-powered Applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;