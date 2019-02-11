import React from 'react';
import LazyLoad from 'vanilla-lazyload';

import grahamScanVideo from '../assets/videos/grahamScanPreview.min.mp4';
import scheduleMakerVideo from '../assets/videos/scheduleMakerPreview.min.mp4';

import Header from '../sections/Header';
import Layout from '../components/layout';
import Projects from '../sections/Projects';
import AboutMe from '../sections/AboutMe';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

import GRAHAM_SCAN_COPY from '../__copy__/projects/GRAHAM_SCAN_COPY';
import SCHEDULE_MAKER_COPY from '../__copy__/projects/SCHEDULE_MAKER_COPY';

class IndexPage extends React.Component {
  componentDidMount() {
    // Instantiate lazyload after mount so program can
    // properly hook onto components
    const myLazyLoad = new LazyLoad({
      elements_selector: ".lazy",
    });
  }
  render() {
    return (
    <Layout>
      <Header />
      <Projects />
      <AboutMe />
      <ContactForm />
      <Footer />
    </Layout>
    )
  }
}

export default IndexPage;
