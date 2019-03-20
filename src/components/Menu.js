import React from 'react';

import NAV_LINKS from '../__copy__/NAV_LINKS';
import toKebabCase from '../utils/toKebabCase';

const Menu = ({ onClick }) => (
  <nav className='menu'>
    <ul className='menu__list'>
      {NAV_LINKS.map(sectionName => (
        <li key={sectionName} className="menu__item">
          <a 
            onClick={onClick}
            href={`#${toKebabCase(sectionName)}`} className="menu__link"
          >
            {sectionName}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
