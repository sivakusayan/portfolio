import React from 'react';
import Reveal from 'react-reveal/Reveal';

const Header = () => (
  <header className='section' id='header'>
    <Reveal effect='fade-in'>
      <div className='header__text'>
        <h1 className='header__title'>Hi. <br/> I'm Sayan.</h1>
        <p className='header__blurb'>I make fast, responsive, and maintainable websites. Ready to make something amazing?</p>
      </div>
      <a className='btn btn--header' href='#projects'>See my Work</a>
    </Reveal>
  </header>
);

export default Header;
