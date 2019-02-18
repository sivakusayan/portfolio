import React from 'react';
import Reveal from 'react-reveal/Reveal';

import documentIcon from '../assets/svg/document.svg';
import githubIcon from '../assets/svg/github.svg';
import resume from '../assets/pdf/resume.pdf';

import ABOUT_ME_COPY from '../__copy__/ABOUT_ME_COPY';

const githubLink = 'https://github.com/sivakusayan';

const AboutMe = () => (
  <section className='section' id='about-me'>
      <Reveal effect='fade-in'>
        <div className='section__text'>
          <h3 className='section__title'>About Me</h3>
          <p className='about-me__description'>{ABOUT_ME_COPY.firstParagraph}</p>
          <p className='about-me__description'>{ABOUT_ME_COPY.secondParagraph}</p>
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
      </Reveal>
  </section>
);

export default AboutMe;
