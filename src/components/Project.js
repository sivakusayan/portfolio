import React from 'react';
import LazyLoad from 'react-lazyload';

import githubIcon from '../assets/svg/github.svg';
import liveIcon from '../assets/svg/live.svg';

const Project = ({ 
  video,
  title,
  subtitle,
  description,
  technologies,
  liveLink,
  gitLink,
}) => (
  <div className='project'>
    <div className='project__video-wrapper'>
      <LazyLoad once offset={100}>
        <video className='project__video' loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </LazyLoad>
    </div>
    <h3 className='project__title'>{title}</h3>
    <h4 className='project__subtitle'>{subtitle}</h4>
    <div className='project__meta'>
      <p className='project__technologies'>{technologies.join(', ')}</p>
      <div className='btn-container'>
        <a 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn'
          href={liveLink}
        >
          <svg className='btn__icon'>
            <use xlinkHref={`#${liveIcon.id}`} />
          </svg>
          <p className='btn__text'>Live Demo</p>
        </a>
        <a 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn'
          href={gitLink}
        >
          <svg className='btn__icon'>
            <use xlinkHref={`#${githubIcon.id}`} />
          </svg>
          <p className='btn__text'>Source Code</p>
        </a>
      </div>
    </div>
    <p className='project__description'>{description}</p>
  </div>
);

export default Project;
