import React from 'react';
import logo from './logo.svg';
import './css/app.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Hero></Hero>
        <Header></Header>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
