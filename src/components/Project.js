import React from 'react';

import githubIcon from '../assets/svg/github.svg';
import liveIcon from '../assets/svg/live.svg';
import linkIcon from '../assets/svg/link.svg';
import LoadingIcon from './LoadingIcon';

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
      <video className='project__video lazy' loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <LoadingIcon />
    </div>
    <div className='project__info'>
      <h3 className='project__title'>{title}</h3>
      <h4 className='project__subtitle'>{subtitle}</h4>
      <div className='project__links'>
        <a 
          target='_blank' 
          rel='noopener noreferrer' 
          className='link link--external'
          href={gitLink}
        >
          <span className='link__text'>
            Source Code
          </span>
          <svg role="img" className='link__icon'>
            <title>See source code</title>
            <use xlinkHref={`#${linkIcon.id}`} />
          </svg>
        </a>
        <a 
          target='_blank' 
          rel='noopener noreferrer' 
          className='link link--external'
          href={liveLink}
        >
          <span className='link__text'>
            Live Demo
          </span>
          <svg role="img" className='link__icon'>
            <title>See live demo</title>
            <use xlinkHref={`#${linkIcon.id}`} />
          </svg>
        </a>
      </div>
      <p className='project__description'>{description}</p>
    </div>
  </div>
);

export default Project;
