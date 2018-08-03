import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../hoc/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { connect } from "react-redux";
import * as actions from "../store/actions";

// CSS
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { robots, loding, error, filter, onSearchChange } = this.props;

    // Compare the robots array and filter with props
    const filteredSearch = robots.filter(robot => {
      return robot.name.toLowerCase().includes(filter.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriendz</h1>
        <SearchBox filter={onSearchChange} value={filter} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredSearch} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
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
