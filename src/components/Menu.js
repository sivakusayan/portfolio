import React from 'react';

import NAV_LINKS from '../__copy__/NAV_LINKS';
import toKebabCase from '../utils/toKebabCase';

const Menu = ({ onClick }) => (
  <nav className='menu'>
    <ul className='menu__list'>
      <li className='menu__item'>
        {NAV_LINKS.map(sectionName => (
          <a 
            key={sectionName}
            onClick={onClick}
            href={`#${toKebabCase(sectionName)}`} className="menu__link"
          >
            {sectionName}
          </a>
        ))}
      </li>
    </ul>
  </nav>
);

export default Menu;
