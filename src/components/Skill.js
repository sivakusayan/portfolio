import React from 'react';

import reactIcon from '../assets/svg/react.svg';
import reduxIcon from '../assets/svg/redux.svg';
import jestIcon from '../assets/svg/jest.svg';

import toTitleCase from '../utils/toTitleCase';

const Skill = ({ skill }) => (
  <li className='skill' key={skill}>
    <svg className='skill__icon'>
      {/* Remember that according to SKILLS_COPY.js, 
          we should lowercase the name of the icons.*/}
      <use xlinkHref={`#${skill.toLowerCase()}`} />
    </svg>
    <p className='skill__name'>{skill}</p>
  </li>
);

export default Skill;
