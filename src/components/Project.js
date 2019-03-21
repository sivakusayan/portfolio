import React from 'react';

import githubIcon from '../assets/svg/github.svg';
import liveIcon from '../assets/svg/live.svg';
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
      <div className='project__meta'>
        <div className='btn-container'>
          <a 
            target='_blank' 
            rel='noopener noreferrer' 
            className='btn'
            href={gitLink}
          >
            <svg className='btn__icon'>
              <use xlinkHref={`#${githubIcon.id}`} />
            </svg>
            <p className='btn__text'>
              {/* Responsively make text more detailed on bigger
                  screens. */}
              <span className='not-small-screens'>Source&nbsp;</span>Code
            </p>
          </a>
          <a 
            target='_blank' 
            rel='noopener noreferrer' 
            className='btn btn--emphasize'
            href={liveLink}
          >
            <svg className='btn__icon'>
              <use xlinkHref={`#${liveIcon.id}`} />
            </svg>
            <p className='btn__text'>
              {/* Responsively make text more detailed on bigger
                  screens. */}
              <span className='not-small-screens'>Live&nbsp;</span>Demo
            </p>
          </a>
        </div>
      </div>
      <p className='project__description'>{description}</p>
    </div>
  </div>
);

export default Project;
