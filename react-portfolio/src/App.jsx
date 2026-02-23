import React, { useState } from "react";
import "./App.css";
import MyPhoto from "./assets/myphoto.jpeg";

function App() {
  const [expanded, setExpanded] = useState(null); // track expanded project

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
          <img src={MyPhoto} alt="My Profile" className="profile-img" />
          <h1>Hi, I'm Santhiya</h1>
          <h3 className="typing">Web Developer | AI Enthusiast | Creative Applications</h3>
          <p>
  I am a Computer Science Engineering student with a passion for creating 
  innovative web applications, exploring the world of Artificial Intelligence, 
  and crafting interactive digital experiences that combine creativity with technology. 
  I love learning new tools, solving challenging problems, and building projects that make an impact.
</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-box">
          <h2>My Skills</h2>

          <div className="skill">
            <span>Programming (C, Java, Python)</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Web (HTML, CSS, JavaScript, React, Angular)</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Database (MySQL)</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Tools (Git, VS Code)</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
  <div className="section-box">
    <h2>My Projects</h2>

    {/* Project 1 */}
    <div
      className={`project-card ${expanded === 1 ? "expanded" : ""}`}
      onClick={() => setExpanded(expanded === 1 ? null : 1)}
    >
      <h3>🎵 Music App</h3>
      {expanded === 1 && (
        <div className="project-details">
          <p>
            A React-based music streaming app with a modern interface. Users can play and pause tracks, 
            navigate playlists, add or remove songs, and toggle dark mode. The UI is fully responsive, 
            adapting to both desktop and mobile devices for a seamless experience.
          </p>
          <p><strong>Technologies:</strong> React, CSS, HTML, JavaScript</p>
        </div>
      )}
    </div>

    {/* Project 2 */}
    <div
      className={`project-card ${expanded === 2 ? "expanded" : ""}`}
      onClick={() => setExpanded(expanded === 2 ? null : 2)}
    >
      <h3>🚺 Women Safety Index Calculation</h3>
      {expanded === 2 && (
        <div className="project-details">
          <p>
            A data analysis application to calculate safety scores for regions based on crime and demographic datasets. 
            It generates safety indexes and rankings for cities, with interactive maps for better visualization. 
            The backend is built using Flask with Python scripts to process and analyze the data efficiently.
          </p>
          <p><strong>Technologies:</strong> Python, Flask, Pandas, HTML, CSS</p>
        </div>
      )}
    </div>
  </div>
</section>

      {/* Internships */}
      <section id="internships" className="section">
  <div className="section-box">
     <h2>Internships</h2>
      <div className="internship-card">
  <h3>Frontend Developer Intern – FemtoSoft</h3>
  <p>
    Worked on <strong>real-time Angular-based web applications</strong>.
    Contributed to developing interactive UI components, improving user experience,
    and maintaining responsive designs.
  </p>

  {/* Responsibilities */}
  <ul className="internship-tasks">
    <li>Developed reusable Angular components and modules</li>
    <li>Collaborated with backend team to integrate REST APIs</li>
    <li>Performed code reviews and bug fixing to ensure quality delivery</li>
    <li>Implemented responsive designs compatible across devices</li>
  </ul>

  {/* Icons for tools */}
  <div className="internship-icons">
    <div className="icon-item">
      <span role="img" aria-label="Angular">🅰️</span>
      <span>Angular</span>
    </div>
    <div className="icon-item">
      <span role="img" aria-label="Git">🔧</span>
      <span>Git</span>
    </div>
    <div className="icon-item">
      <span role="img" aria-label="VS Code">💻</span>
      <span>VS Code</span>
    </div>
    <div className="icon-item">
      <span role="img" aria-label="Web">🌐</span>
      <span>HTML/CSS/JS</span>
    </div>
  </div>
</div>
</div>
</section>


      {/* Certifications */}
      <section className="section">
  <div className="section-box">
    <h2>Certifications</h2>
    <div className="certifications-list">
      
      <div className="cert-item">
        <h3>Oracle Certified – Generative AI (2024)</h3>
        <p>
          Learned and demonstrated skills in building AI models using Oracle's AI platform.
          Covered topics like natural language processing, machine learning, and AI integration
          into enterprise applications.
        </p>
      </div>

      <div className="cert-item">
        <h3>AWS Cloud Practitioner – NASSCOM (2024)</h3>
        <p>
          Gained foundational understanding of AWS cloud services, architecture,
          and cloud security. Learned to deploy, manage, and scale applications in
          the AWS ecosystem.
        </p>
      </div>

      <div className="cert-item">
        <h3>Machine Learning – IIT Kharagpur (2025)</h3>
        <p>
          Completed an advanced course on machine learning algorithms, data analysis,
          and model deployment. Hands-on projects included predictive modeling,
          classification, and regression tasks using Python and relevant ML libraries.
        </p>
      </div>

    </div>
  </div>
</section>

     <section id="contact" className="section">
  <div className="section-box">
    <h2>Contact Me</h2>

    {/* Email Card */}
    <div
      className="contact-card"
      onClick={() => window.location.href = "mailto:santhiyamanikandan788@gmail.com"}
    >
      <h3>Email</h3>
      <p>Click to send me an email</p>
    </div>

    

    {/* LinkedIn Card */}
    <div
      className="contact-card"
      onClick={() => window.open("https://www.linkedin.com/in/santhiya-manikandan-07b210359", "_blank")}
    >
      <h3>LinkedIn</h3>
      <p>Click to visit my LinkedIn profile</p>
    </div>

    {/* GitHub Card */}
    <div
      className="contact-card"
      onClick={() => window.open("https://github.com/santhiya-2311", "_blank")}
    >
      <h3>GitHub</h3>
      <p>Click to visit my GitHub profile</p>
    </div>

  </div>
</section>
    </>
  );
}

export default App;