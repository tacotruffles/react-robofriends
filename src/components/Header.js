import React, { Component } from 'react';
//import CounterButton from './CounterButton';

class Header extends Component {
  // Just render this component once!
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>RoboFriendz</h1>
        {/* <CounterButton color={'red'} /> */}
      </div>
    );
  }
}

export default Header;
