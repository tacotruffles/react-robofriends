import React, { Component } from 'react';

class CounterButton extends Component {
  state = {
    count: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }

  onUpdateCount = () => {
    this.setState(state => ({ count: this.state.count + 1 }));
  };
  render() {
    return (
      <button id="counter" color={this.props.color} onClick={this.onUpdateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
