import React from 'react';

// Import to let webpack know we need these
import reactIcon from '../assets/svg/react.svg';
import reduxIcon from '../assets/svg/redux.svg';
import javascriptIcon from '../assets/svg/javascript.svg';
import sassIcon from '../assets/svg/sass.svg';
import cssIcon from '../assets/svg/css.svg';
import htmlIcon from '../assets/svg/html.svg';

import nodejsIcon from '../assets/svg/node.js.svg';
import expressjsIcon from '../assets/svg/express.js.svg';
import mongodbIcon from '../assets/svg/mongodb.svg';
import mysqlIcon from '../assets/svg/mysql.svg';
import firebaseIcon from '../assets/svg/firebase.svg';

import jestIcon from '../assets/svg/jest.svg';
import mochaIcon from '../assets/svg/mocha.svg';
import jasmineIcon from '../assets/svg/jasmine.svg';
import enzymeIcon from '../assets/svg/enzyme.svg';

import herokuIcon from '../assets/svg/heroku.svg';
import netlifyIcon from '../assets/svg/netlify.svg';

import githubIcon from '../assets/svg/github.svg';
import webpackIcon from '../assets/svg/webpack.svg';
import pythonIcon from '../assets/svg/python.svg';
import javaIcon from '../assets/svg/java.svg';

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
