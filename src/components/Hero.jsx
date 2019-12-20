import React from 'react';
import '../css/hero.css';
import Me from '../images/me.png';

export default function Hero() {
  return (
    <div id='hero'>
      <div className="hero-img">
        <img src={Me} alt="" />
        <h1 data-aos='fade-up' data-aos-delay="1500" data-aos-duration='1000'>Mike Abatemarco</h1>
        <h2 data-aos='fade-up' data-aos-delay="2000" data-aos-duration='1500'>Full-Stack Software Engineer</h2>
      </div>
    </div>
  )
}
