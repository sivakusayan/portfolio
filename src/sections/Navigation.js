import React, { Component } from 'react';

import Menu from '../components/Menu';
import HamburgerIcon from '../components/HamburgerIcon';

class Navigation extends Component {
  state = {
    // Whether the menu is hidden or not
    isOpen: false,
    // Whether the button to open the menu is
    // hidden or not. This is false while the
    // user is in the header.
    isClickable: false,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      // We want the menu button to come out when user is no longer
      // in the header landing page.
      const isClickable = (window.scrollY || window.pageYOffset) > window.innerHeight;
      // Check if values are different so we don't
      // flood the browser with needless updates
      if (isClickable !== this.state.isClickable) {
        this.setState({ isClickable });
      }
    })
  }

  toggleOpen = () => this.setState((prevState) => ({
    isOpen: !prevState.isOpen,
  }))

  render() {
    const { isOpen, isClickable } = this.state
    return (
      <>
        {/* Darkens screen while navigation menu is open */}
        <div 
          className={`overlay ${isOpen ? 'isOpen' : ''}`} 
          onClick={this.toggleOpen}
        />
        {/* Actual navigation menu */}
        <div 
          className={
            `navigation ${isOpen ? 'isOpen' : ''} ${isClickable ? '' : 'hide'}`
          }
        >
          <button 
            onClick={this.toggleOpen}
            className='btn btn--navigation'
          >
            <HamburgerIcon isOpen={isOpen}/>
          </button>
          <Menu onClick={this.toggleOpen} />
        </div>
      </>
    )
  }
}

export default Navigation;
