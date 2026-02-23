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
  <div className="home-content">
    <img src="/myphoto.jpg" alt="My Profile" className="profile-img" />
    <h1>Hi, I'm Santhiya</h1>
    <h3 className="typing">Web Developer | AI Enthusiast | Creative Applications</h3>
    <p>
      I am a Computer Science Engineering student passionate about
      Web Development, Artificial Intelligence, and building creative applications.
    </p>
    <a href="#projects" className="btn">View My Work</a>
  </div>
</section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-box">
          <h2>My Skills</h2>
          <ul>
            <li><strong>Programming:</strong> C, Java, Python</li>
            <li><strong>Web:</strong> HTML, CSS, JavaScript, React, Angular</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Tools:</strong> Git, VS Code</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-box">
          <h2>My Projects</h2>

          <p><strong>🎵 Music App</strong></p>
          <p>
            Developed a music streaming app using React with features like
            play/pause, song listing, and playlist management.
          </p>

          <p><strong>🚺 Women Safety Index Calculation</strong></p>
          <p>
            Built using Python & Flask. Analyzed crime and demographic data
            to generate safety scores and rankings.
          </p>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="section">
        <div className="section-box">
          <h2>Internships</h2>
          <p><strong>Frontend Developer Intern – FemtoSoft</strong></p>
          <p>
            Worked on Angular-based real-time applications and gained hands-on
            experience in frontend development.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="section-box">
          <h2>Certifications</h2>
          <ul>
            <li>Oracle Certified – Generative AI (2024)</li>
            <li>AWS Cloud Practitioner – NASSCOM (2024)</li>
            <li>Machine Learning – IIT Kharagpur (2025)</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="section-box">
          <h2>Contact Me</h2>
          <p>Email: santhiyamanikandan788@gmail.com</p>
          <p>Phone: 9626796755</p>
          <p>Location: Thanjavur, Tamil Nadu</p>
        </div>
      </section>
    </>
  );
}

export default App;