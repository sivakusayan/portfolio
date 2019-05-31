import React from 'react';

import NAV_LINKS from '../__copy__/NAV_LINKS';
import toKebabCase from '../utils/toKebabCase';

import projectsIcon from '../assets/svg/projects.svg';
import skillsIcon from '../assets/svg/skills.svg';
import aboutMeIcon from '../assets/svg/about-me.svg';

const Menu = ({ onClick }) => (
  <nav className='menu'>
    <ul className='menu__list'>
      {NAV_LINKS.map(sectionName => (
        <li key={sectionName} className="menu__item">
          <a 
            className="menu__link"
            onClick={onClick}
            // DO NOT REMOVE -section
            // We need it to distinguish between svg ids loaded
            // on top of page.
            href={`#${toKebabCase(sectionName)}-section`}
          >
            <svg role="img" className='menu__icon'>
              <title>Go to {sectionName}</title>
              {/* Remember that according to SKILLS_COPY.js, 
                  we should lowercase the name of the icons.*/}
              <use xlinkHref={`#${toKebabCase(sectionName)}`} />
            </svg>
            <span>{sectionName}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
