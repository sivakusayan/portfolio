import React from 'react';
import Reveal from 'react-reveal/Reveal';

const Header = () => (
  <header className='section' id='header'>
    <Reveal effect='fade-in'>
      <h1 className='header__title'>Sayan</h1>
      <a className='btn btn--header' href='#projects'>See my Work</a>
    </Reveal>
  </header>
);

export default Header;
