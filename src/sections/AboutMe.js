import React from 'react';

import documentIcon from '../assets/svg/document.svg';
import githubIcon from '../assets/svg/github.svg';
import resume from '../assets/pdf/resume.pdf';

import ABOUT_ME from '../__copy__/ABOUT_ME_COPY';

const githubLink = 'https://github.com/sivakusayan';

const AboutMe = () => (
  <section className='section' id='about-me-section'>
    <div className="section__content">
      <div className='section__text'>
        <h3 className='section__title'>About Me</h3>
        {ABOUT_ME}
      </div>
      <div className='btn-container'>
        <a 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn'
          href={githubLink}
        >
          <svg className='btn__icon'>
            <use xlinkHref={`#${githubIcon.id}`} />
          </svg>
          <p className='btn__text'>Github</p>
        </a>
        <a 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn btn--emphasize'
          href={resume}
        >
          <svg className='btn__icon'>
            <use xlinkHref={`#${documentIcon.id}`} />
          </svg>
          <p className='btn__text'>Resume</p>
        </a>
      </div>
    </div>
  </section>
);

export default AboutMe;
