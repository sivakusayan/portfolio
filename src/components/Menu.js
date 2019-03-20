import React from 'react';

const Menu = () => (
  <nav className='menu'>
    <ul className='menu__list'>
      <li className='menu__item'>
        <a href="#projects" className="menu__link">Projects</a>
        <a href="#skills" className="menu__link">Skills</a>
        <a href="#about-me" className="menu__link">About Me</a>
        <a href="#form" className="menu__link">Contact Form</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
