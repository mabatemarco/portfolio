import React from 'react';
import '../css/projects.css';
import Deckbuilder from '../images/deckbuilderss.png';
import Locus from '../images/LOCUS.png';
import ShoppingList from '../images/shoppinglistss.png';
import Airyng from '../images/airyngss.png';

export default function Projects() {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="projects">
      <a data-aos='fade-right' className='project' target='_blank' href="https://www.shoplocus.com">
          <div className='overlay'>
          </div>
          <img src={Locus} alt="Locus" />
          <h3>LOCUS</h3>
          <hr></hr>
          <p>Local shopping marketplace for conscious consumers</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>LOCUS</h3>
        <a data-aos='fade-right' className='project' target='_blank' href="http://airyng.surge.sh">
          <div className="overlay">
          </div>
          <img src={Airyng} alt="urban suburbanite" />
          <h3>Urban Suburbanite</h3>
          <hr></hr>
          <p>Rent yards for private leisure events</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Urban Suburbanite</h3>
        <a data-aos='fade-left' className='project' target='_blank' href="http://deckbuilder.surge.sh">
          <div className="overlay">
          </div>
          <img src={Deckbuilder} alt="deckbuilder" />
          <h3>Deckbuilder</h3>
          <hr></hr>
          <p>Card-cased combat game</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Deckbuilder</h3>
        <a data-aos='fade-left' className='project' target='_blank' href="http://shoppinglist928.surge.sh">
          <div className="overlay">
          </div>
          <img src={ShoppingList} alt="shopping list" />
          <h3>Shopping List</h3>
          <hr></hr>
          <p>Plan, shop, and cook your week's meals</p>
        </a>
        <h3 data-aos='fade-in' className='mobile-title'>Shopping List</h3>
      </div>
      <div className="parallax"></div>
    </div >
  )
}
