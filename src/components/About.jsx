import React from 'react';
import '../css/about.css';
import Github from '../images/github.png';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Css from '../images/css.png';
import Express from '../images/express.png';
import Html from '../images/html.png';
import Javascript from '../images/javascript.png';
import Reacticon from '../images/react.png';
import Rubyonrails from '../images/rubyonrails.png';


export default function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <div className="about">
        <div data-aos='zoom-in-up' className="about-left">
          <p>I am a software engineer with a passion for problem solving and exploring innovative solutions. My background in science and math has empowered me with critical thinking and analytical skills, and my time working independently has allowed me to develop my abilities to self-motivate and organize. I am naturally curious and hungry to learn (and teach) everything I can in my field. I am currently seeking a software engineer position where growth and development are valued.</p>
        </div>
        <div data-aos='fade-down' className="about-right">
          <div className="channel">
            <a href="https://github.com/mabatemarco">
              <img src={Github} alt="github" />
              <h4>Github</h4>
            </a>
          </div>
          <div className="channel">
            <a href="https://www.linkedin.com/in/mikeabatemarco/">
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
        </div>
      </div>
      <div className="skills">
        <h3>Language Proficiencies</h3>
        <div className="skill-icons">
          <img data-aos='zoom-out-up' src={Javascript} alt="javascript"/>
          <img data-aos='zoom-out-up' src={Reacticon} alt="react"/>
          <img data-aos='zoom-out-up' src={Rubyonrails} alt="ruby on rails"/>
          <img data-aos='zoom-out-up' src={Express} alt="express"/>
          <img data-aos='zoom-out-up' src={Html} alt="html"/>
          <img data-aos='zoom-out-up' src={Css} alt="css"/>
        </div>
      </div>
    </div>
  )
}
