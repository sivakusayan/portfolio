import React, { Component } from 'react';

import TypeIt from 'typeit';

class Header extends Component {
  componentDidMount() {
    const instance = new TypeIt('#typeit', {
      strings: ['Nature Lover', 'Avid Reader'],
      loop: true,
      speed: 80,
      nextStringDelay: 1800,
      breakLines: false,
    }).go();
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
