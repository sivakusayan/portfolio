import React from 'react';
import Reveal from 'react-reveal/Reveal';

import Project from '../components/Project';
import grahamScanVideo from '../assets/videos/grahamScanPreview.min.mp4';
import scheduleMakerVideo from '../assets/videos/scheduleMakerPreview.min.mp4';
import GRAHAM_SCAN_COPY from '../__copy__/projects/GRAHAM_SCAN_COPY';
import SCHEDULE_MAKER_COPY from '../__copy__/projects/SCHEDULE_MAKER_COPY';

const Projects = () => (
  <section className='section' id='projects'>
    <Reveal effect='skew-fade-in'>
      <h2 className='section__title'>Projects</h2>
    	<Project video={grahamScanVideo} {...GRAHAM_SCAN_COPY} />
      <Project video={scheduleMakerVideo} {...SCHEDULE_MAKER_COPY} />
    </Reveal>
  </section>
);

export default Projects;
