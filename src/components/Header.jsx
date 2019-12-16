import React from 'react';
import '../css/header.css';

export default class Header extends React.Component {
  state = {
    hamClass: 'ham-icon',
    menu: false,
  }

  hamToggle = () => {
    if (this.state.hamClass === 'ham-icon') {
      this.setState({
        hamClass: 'ham-icon clicked-ham'
      })
    }
    else {
      this.setState({
        hamClass: 'ham-icon'
      })
    }
  }

  menuToggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu
    }))
  }

  render() {
    return (
      <header>
        <a href="#projects" className='underline'>Projects</a>
        <a href="#about" className='underline'>About Me</a>
        <a href="#contact" className='underline'>Contact Me</a>
        <div onClick={() => { this.hamToggle(); this.menuToggle() }} className={this.state.hamClass}>
          <div></div>
        </div>
        {this.state.menu &&
          <div className="ham-menu">
            <a href="#projects" className='underline'>Projects</a>
            <a href="#about" className='underline'>About Me</a>
            <a href="#contact" className='underline'>Contact Me</a>
          </div>
        }
      </header>
    )
  }
}
