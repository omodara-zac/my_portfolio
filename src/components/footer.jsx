const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Zaccheaus Omodara. All rights reserved.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/omodara-Zac"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/omodara-zaccheaus-3b160a441"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://wa.me/2348140352172"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;