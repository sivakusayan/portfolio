import React from 'react';

import reactIcon from '../assets/svg/react.svg';
import reduxIcon from '../assets/svg/redux.svg';
import jestIcon from '../assets/svg/jest.svg';

const toTitleCase = (string) => {
  const words = string.toLowerCase().split(' ');
  const titledWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return titledWords.join(' ');
};

const Technology = ({ technology }) => (
  <li className='technology'>
    <svg className='link__icon'>
      <use xlinkHref={`#${technology}`} />
    </svg>
    <p className='technology__text'>{toTitleCase(technology)}</p>
  </li>
);

export default Technology;
