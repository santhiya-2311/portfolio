import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Santhiya</div>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section className="home">
        <img src="/myphoto.jpg" alt="My Profile" className="profile-img" />
        <h1>Hi, I'm Santhiya</h1>
        <p>
          I am a Computer Science Engineering student passionate about
          Web Development, Artificial Intelligence, and building creative applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>My Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <p>Fake Job Detection System</p>
        <p>Portfolio Website</p>
      </section>

      {/* Internships Section */}
      <section id="internships" className="section">
        <h2>Internships</h2>
        <p>Web Development Intern</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: yourmail@gmail.com</p>
      </section>
    </>
  );
}

export default App;