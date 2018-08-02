import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

// Data
import { robots } from "./data/robots";

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
