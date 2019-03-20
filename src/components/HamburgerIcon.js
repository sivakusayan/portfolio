import React from 'react';

const HamburgerIcon = ({ isOpen }) => (
  <span className={`hamburger-icon ${isOpen ? 'isOpen' : ''}`}>
    <span></span>
  </span>
);

export default HamburgerIcon;
