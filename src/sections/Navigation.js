import React, { Component } from 'react';

import Menu from '../components/Menu';
import HamburgerIcon from '../components/HamburgerIcon';

class Navigation extends Component {
  state = {
    isOpen: false,
  }
  toggleOpen = () => this.setState((prevState) => ({
    isOpen: !prevState.isOpen,
  }))

  render() {
    const { isOpen } = this.state
    return (
      <>
        {/* Darkens screen while navigation menu is open */}
        <div 
          className={`overlay ${isOpen ? 'isOpen' : ''}`} 
          onClick={this.toggleOpen}
        />
        {/* Actual navigation menu */}
        <div className={`navigation ${isOpen ? 'isOpen' : ''}`}>
          <button 
            onClick={this.toggleOpen}
            className='btn btn--navigation'
          >
            <HamburgerIcon />
          </button>
          <Menu onClick={this.toggleOpen} />
        </div>
      </>
    )
  }
}

export default Navigation;
