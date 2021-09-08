import React from 'react';
import '../css/about.css';
import Github from '../images/github.png';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Resume from '../images/resume.png';
import Css from '../images/css.png';
import Express from '../images/express.png';
import Html from '../images/html.png';
import Javascript from '../images/javascript.png';
import Reacticon from '../images/react.png';
import Rubyonrails from '../images/rubyonrails.png';
import Java from '../images/java.png';


export default function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <div className="about">
        <div data-aos='zoom-in-up' className="about-left">
          <p>I am a software engineer with a passion for designing elegant solutions and robust systems. With formal education in math and science, I am equipped with the critical thinking, logic and analytic skills to solve complex problems. I’m self-motivated and thrive in ambiguous environments as I have the technical know-how and social aptitude to develop useful and impactful solutions. Among my most valuable skills are clear communication within a team, and the ability to work with technical, management, and design talents to coordinate large projects and deliver against my client’s goals with high value. I am currently seeking a software engineering position where growth and excellence are valued. </p>
        </div>
        <div data-aos='fade-down' className="about-right">
          <div className="channel">
            <a target='_blank' href="https://github.com/mabatemarco">
              <img src={Github} alt="github" />
              <h4>Github</h4>
            </a>
          </div>
          <div className="channel">
            <a target='_blank' href="https://www.linkedin.com/in/mikeabatemarco/">
              <img src={Linkedin} alt="linkedin" />
              <h4>LinkedIn</h4>
            </a>
          </div>
          <div className="channel">
            <a href="#contact">
              <img src={Email} alt="email" />
              <h4>mabatemarco928@gmail.com</h4>
            </a>
          </div>
          <div className="channel">
            <a target='_blank' href="https://docs.google.com/document/d/1PumZs1kmM_a9gSuiF21xd4X9r2rFPcQFDg_MHVYpvNQ/edit?usp=sharing">
              <img src={Resume} alt="email" />
              <h4>Resume</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3>Language Proficiencies</h3>
        <div className="skill-icons">
          <img data-aos='zoom-out-up' src={Javascript} alt="javascript" />
          <img data-aos='zoom-out-up' src={Reacticon} alt="react" />
          <img data-aos='zoom-out-up' src={Rubyonrails} alt="ruby on rails" />
          <img data-aos='zoom-out-up' src={Express} alt="express" />
          <img data-aos='zoom-out-up' src={Java} alt="java" />
          <img data-aos='zoom-out-up' src={Html} alt="html" />
          <img data-aos='zoom-out-up' src={Css} alt="css" />
        </div>
      </div>
      <div className="parallax"></div>
    </div>
  )
}
