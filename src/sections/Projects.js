import React from 'react';

import Project from '../components/Project';
import grahamScanVideo from '../assets/videos/grahamScanPreview.min.mp4';
import scheduleMakerVideo from '../assets/videos/scheduleMakerPreview.min.mp4';
import GRAHAM_SCAN_COPY from '../__copy__/projects/GRAHAM_SCAN_COPY';
import SCHEDULE_MAKER_COPY from '../__copy__/projects/SCHEDULE_MAKER_COPY';

const Projects = () => (
  <section className='section section--projects'>
    <h2 className='section__title'>Projects</h2>
    <Project video={grahamScanVideo} {...GRAHAM_SCAN_COPY} />
    <Project video={scheduleMakerVideo} {...SCHEDULE_MAKER_COPY} />
  </section>
);

export default Projects;
