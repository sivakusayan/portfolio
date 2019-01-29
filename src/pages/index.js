import React from 'react';

import grahamScanVideo from '../assets/videos/grahamScanPreview.min.mp4'

import Layout from '../components/layout'
import Project from '../components/Project';

import GRAHAM_SCAN_COPY from '../__copy__/projects/GRAHAM_SCAN_COPY';

const IndexPage = () => (
  <Layout>
    <Project video={grahamScanVideo} {...GRAHAM_SCAN_COPY} />
  </Layout>
)

export default IndexPage
