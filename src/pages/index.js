import React from 'react';

import grahamScanVideo from '../assets/videos/grahamScanPreview.min.mp4';
import scheduleMakerVideo from '../assets/videos/scheduleMakerPreview.min.mp4';

import Layout from '../components/layout'
import Project from '../components/Project';

import GRAHAM_SCAN_COPY from '../__copy__/projects/GRAHAM_SCAN_COPY';
import SCHEDULE_MAKER_COPY from '../__copy__/projects/SCHEDULE_MAKER_COPY';

const IndexPage = () => (
  <Layout>
    <Project video={grahamScanVideo} {...GRAHAM_SCAN_COPY} />
    <Project video={scheduleMakerVideo} {...SCHEDULE_MAKER_COPY} />
  </Layout>
)

export default IndexPage
