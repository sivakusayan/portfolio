import React from 'react';
import Reveal from 'react-reveal/Reveal';

const Header = () => (
  <header className='header'>
    <div className='header__content'>
      <div className='header__text'>
        <h1 className='header__title'>Hi. <br/> I'm Sayan.</h1>
        <p className='header__blurb'>I create websites that are fast, responsive, and cross-browser. Ready to make something amazing?</p>
      </div>
      <a className='btn btn--header' href='#projects'>See my Work</a>
    </div>
  </header>
);

export default Header;
