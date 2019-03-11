import React from 'react';

const Skills = () => (
  <section className='section' id='skills'>
    <h2 className='section__title'>Skills</h2>
    <ul className='skills-container'>
      <li className='skills'>
        <p className='skills__category'>Frontend</p>
        <ul className='skills__list'></ul>
      </li>
      <li className='skills'>
        <p className='skills__category'>Backend</p>
        <ul className='skills__list'></ul>
      </li>
      <li className='skills'>
        <p className='skills__category'>Testing</p>
        <ul className='skills__list'></ul>
      </li>
      <li className='skills'>
        <p className='skills__category'>Deployment</p>
        <ul className='skills__list'></ul>
      </li>
      <li className='skills'>
        <p className='skills__category'>Misc</p>
        <ul className='skills__list'></ul>
      </li>
    </ul>
  </section>
)

export default Skills;
