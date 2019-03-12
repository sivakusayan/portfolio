import React from 'react';
import grahamScanVideo from '../assets/videos/grahamScanPreview.min.mp4';
import scheduleMakerVideo from '../assets/videos/scheduleMakerPreview.min.mp4';

import Header from '../sections/Header';
import Layout from '../components/layout';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import AboutMe from '../sections/AboutMe';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

import GRAHAM_SCAN_COPY from '../__copy__/projects/GRAHAM_SCAN_COPY';
import SCHEDULE_MAKER_COPY from '../__copy__/projects/SCHEDULE_MAKER_COPY';

// Conditionally import LazyLoad to bypass gatsby
// build problems.
try {
  // Require into dist folder to get ES5 transpiled version to work in IE
  // https://github.com/verlok/lazyload/issues/271
  // 
  // Var to not get block scoped
  var LazyLoad = require('vanilla-lazyload/dist/lazyload.js');
} catch (e) {
  console.log('We are not in a browser environment.')
}


class IndexPage extends React.Component {
  componentDidMount() {
    // Instantiate lazyload after mount so program can
    // properly hook onto components
    if (LazyLoad) {
      const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy",
        // Fix for chrome data saver not letting videos autoplay
        // https://stackoverflow.com/questions/47638344/muted-autoplay-in-chrome-still-not-working
        callback_load: (video) => {
          video.muted = true;
          video.play();
        },
      });
    }
  }
  render() {
    return (
    <Layout>
      <Header />
      <Projects />
      <Skills />
      <AboutMe />
      <ContactForm />
      <Footer />
    </Layout>
    )
  }
}

export default IndexPage;
