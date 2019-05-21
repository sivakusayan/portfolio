import React, { Component } from 'react';

import projectsIcon from '../assets/svg/projects.svg';
import documentIcon from '../assets/svg/document.svg';
import githubIcon from '../assets/svg/github.svg';
import resume from '../assets/pdf/resume.pdf';

const githubLink = 'https://github.com/sivakusayan';

// Conditionally import TypeIt to bypass gatsby
// build problems.
let TypeIt;
try {
  // Require into dist folder to get ES5 transpiled version to work in IE
  // https://github.com/verlok/lazyload/issues/271
  // 
  // Var to not get block scoped
  TypeIt = require('typeit');
} catch (e) {
  console.log('We are not in a browser environment.')
}

class Header extends Component {
  componentDidMount() {
    if(TypeIt) {
      const instance = new TypeIt('#typeit', {
        strings: ['Nature Lover', 'Avid Reader'],
        loop: true,
        speed: 80,
        nextStringDelay: 1800,
        breakLines: false,
      }).go();
    }
  }

  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <div className='header__text'>
            <h1 className='header__title'>
              Sayan<br/>
              Sivakumaran<br/>
              <span className='header__emphasis'>><span id= "typeit">Web Developer</span></span>
            </h1>
            <div className='cta'>
              <p className='cta__blurb'>I create websites that are fast, responsive, and cross-browser. Ready to make something amazing?</p>
              <a className='btn btn--emphasize' href='#projects-section'>
                <svg className='btn__icon'>
                  <use xlinkHref={`#${projectsIcon.id}`} />
                </svg>
                <span className='btn__text'>Projects</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
