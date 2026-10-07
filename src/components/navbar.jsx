const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        ZAC<span className="logo-mark">.</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <a
          href="/Zaccheaus_Ayodeji_Omodara_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
