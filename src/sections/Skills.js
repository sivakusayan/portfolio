import React from 'react';

import Skill from '../components/Skill';
import SKILLS_COPY from '../__copy__/SKILLS_COPY';
import toTitleCase from '../utils/toTitleCase';

console.log(SKILLS_COPY)
console.log(typeof SKILLS_COPY)

const Skills = () => (
  <section className='section' id='skills'>
    <h2 className='section__title'>Skills</h2>
    <ul className='skills-container'>
      {Object.keys(SKILLS_COPY).map(category => (
        <li className='skills' key={category}>
          <p className='skills__category'>{toTitleCase(category)}</p>
          <ul className='skills__list'>
            {SKILLS_COPY[category].map(skill => <Skill skill={skill} />)}
          </ul>
      </li>
      ))}
    </ul>
  </section>
)

export default Skills;
