import React, { Component } from 'react';

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
            <p className='header__blurb'>I create websites that are fast, responsive, and cross-browser. Ready to make something amazing?</p>
          </div>
          <a className='btn btn--header' href='#projects-section'>See More</a>
        </div>
      </header>
    )
  }
}

export default Header;
