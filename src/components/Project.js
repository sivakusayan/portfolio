import React from 'react'

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
      <video className='project__video' width="320" height="240" loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='project__text'>
      <h2 className='project__title'>{title}</h2>
      <h3 className='project__subtitle'>{subtitle}</h3>
      <p className='project__description'>{description}</p>
    </div>
    <ul className='project__technologies'>
      {technologies.map(technology => <li className='project__technology'>{technology}</li>)}
    </ul>
    <div className='pr{ject__links'>
      <a className='project__link' href={liveLink}>Live Demo</a>
      <a className='project__link' href={gitLink}>Source Code</a>
    </div>
  </div>
);

export default Project;
