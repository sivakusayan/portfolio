import React from 'react';

import Skill from '../components/Skill';
import SKILLS_COPY from '../__copy__/SKILLS_COPY';
import toTitleCase from '../utils/toTitleCase';

const Skills = () => (
  <section className='section' id='skills-section'>
    <div className="section__content">
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
    </div>
  </section>
)

export default Skills;
