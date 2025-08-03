import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, type ThemeType } from "../context/ThemeContext";
import "../Styles/About.css";

const AboutPage: React.FC = () => {
  const [cardClassName, setCardClassName] = useState("colorfull-card");
  const { theme } = useContext(ThemeContext) as {
    theme: ThemeType;
    setTheme: (t: ThemeType) => void;
  };

  useEffect(() => {
    setCardClassName(theme === "theme3" ? "colorfull-card" : "");
  }, [theme]);

  return (
    <section className={`about-page ${theme}`}>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="profile-wrapper">
          <div className="hero-image">
            <img src="/profile.jpg" alt="Profile" />
          </div>
          <div className="hero-text">
            <h1>About Me</h1>
            <p>
              I’m Jalal Ahmad, A Frontend Developer with 3 years of experience
              specializing in building responsive, scalable web applications
              using React.js,
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="exp-info">
        <div className="contacts">
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>&nbsp;
            beginner.jalal@gmail.com
          </div>{" "}
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>&nbsp; +91 8707767742
          </div>{" "}
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>&nbsp; Ahmedabad,
            Gujarat
          </div>
        </div>
        <div className="about-cards">
          <div className={`card ${cardClassName}`}>
            <h2>Education</h2>
            <ul>
              <li>
                <span>2015–2019:</span>B.Tech in CSE
              </li>
              <li>
                <span>2014–2015:</span>Intermediate (Science Stream)
              </li>
            </ul>
          </div>

          <div className={`card ${cardClassName}`}>
            <h2>Experience</h2>
            <ul>
              <li>
                <span>2022–Present:</span>UI Developer
              </li>
              <li>
                <span>2022–2022:</span>Full Stack Developer
              </li>
            </ul>
          </div>

          <div className={`card ${cardClassName}`}>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript, TypeScript</li>
              <li>React.js, Redux, Context API</li>
              <li>HTML5, CSS3, Bootstrap, Kendo UI</li>
              <li>Communication</li>
            </ul>
          </div>

          <div className={`card ${cardClassName}`}>
            <h2>Tools</h2>
            <ul>
              <li>Figma</li>
              <li>Avev Worktask</li>
              <li>SSMS, VS Code</li>
              <li>Git, GitHub, Bitbucket, Jira, Azure DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
