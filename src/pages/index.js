import React from 'react';

import Layout from '../components/layout';
import Header from '../sections/Header';
import Navigation from '../sections/Navigation';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import AboutMe from '../sections/AboutMe';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

// Conditionally import LazyLoad to bypass gatsby
// build problems.
let LazyLoad;
try {
  // Require into dist folder to get ES5 transpiled version to work in IE
  // https://github.com/verlok/lazyload/issues/271
  // 
  // Var to not get block scoped
  LazyLoad = require('vanilla-lazyload/dist/lazyload.js');
} catch (e) {
  console.log('We are not in a browser environment.')
}

class IndexPage extends React.Component {
  state = {
    // Used only on desktop layout for when menu pops up
    // and shifts everything to the side
    isDesktop: false,
    menuIsOpen: false
  }
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

    const windowWidth = window.innerWidth / parseFloat(
      getComputedStyle(
        document.querySelector('body')
      )['font-size']
    );
    const isDesktop = windowWidth > (1000/16);
    // Check if values are different so we don't
    // flood the browser with needless updates
    this.setState({ isDesktop });

    window.addEventListener('scroll', () => {
      if (!isDesktop) return;
      // We want the menu button to come out when user is no longer
      // in the header landing page.
      const menuIsOpen = (window.scrollY || window.pageYOffset) > window.innerHeight;
      // Check if values are different so we don't
      // flood the browser with needless updates
      if (menuIsOpen !== this.state.menuIsOpen) {
        this.setState({ menuIsOpen });
      }
    })
  }
  render() {
    const { isDesktop, menuIsOpen } = this.state;
    return (
    <Layout>
      <div className={'site-container' + ((isDesktop && menuIsOpen) ? ' menu-open' : '')}>
        <Header />
        <Navigation isDesktop = {isDesktop} />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactForm />
        <Footer />
      </div>
    </Layout>
    )
  }
}

export default IndexPage;
