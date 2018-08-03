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
  state = {
    robots: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.log(error));
  }

  render() {
    const { robots } = this.state;
    const { filter, onSearchChange } = this.props;

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
    filter: state.filter,
    robots: state.robots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(actions.setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
