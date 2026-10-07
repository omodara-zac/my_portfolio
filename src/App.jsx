import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  console.log("Portfolio is running");

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;