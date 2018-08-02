import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

// Data
import { robots } from "./data/robots";

class App extends Component {
  state = {
    robots: robots,
    filter: ""
  };

  onChangeHandler = event => {
    // Set the Filter in State
    this.setState({ filter: event.target.value });
  };

  render() {
    // Compare the robots array and filter with state
    const filteredSearch = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox filter={this.onChangeHandler} value={this.state.filter} />
        <CardList robots={filteredSearch} />
      </div>
    );
  }
}

export default App;
