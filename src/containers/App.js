import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../hoc/Scroll";

// CSS
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    filter: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.log(error));
  }

  onChangeHandler = event => {
    // Set the Filter in State
    this.setState({ filter: event.target.value });
  };

  render() {
    const { robots, filter } = this.state;
    // Compare the robots array and filter with state
    const filteredSearch = robots.filter(robot => {
      return robot.name.toLowerCase().includes(filter.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox filter={this.onChangeHandler} value={filter} />
        <Scroll>
          <CardList robots={filteredSearch} />
        </Scroll>
      </div>
    );
  }
}

export default App;
