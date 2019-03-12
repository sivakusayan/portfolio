import React from 'react';

import reactIcon from '../assets/svg/react.svg';
import reduxIcon from '../assets/svg/redux.svg';
import jestIcon from '../assets/svg/jest.svg';

import toTitleCase from '../utils/toTitleCase';

const Technology = ({ technology }) => (
  <li className='technology'>
    <svg className='btn__icon'>
      <use xlinkHref={`#${technology}`} />
    </svg>
    <p className='technology__text'>{toTitleCase(technology)}</p>
  </li>
);

export default Technology;
