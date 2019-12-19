import React from 'react';
import '../css/hero.css';
import Me from '../images/me.png';

export default function Hero() {
  return (
    <div id='hero'>
      <div className="hero-img">
        <img src={Me} alt="" />
        <h1>Mike Abatemarco</h1>
        <h2>Full-Stack Software Engineer</h2>
      </div>
    </div>
  )
}
