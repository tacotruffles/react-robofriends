import React, { Component } from 'react';
import MainPage from '../components/MainPage';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

// CSS
import './App.css';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    filter: state.searchReducer.filter,
    robots: state.robotReducer.robots,
    loading: state.robotReducer.loading,
    error: state.robotReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(actions.setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(actions.requestRobots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
