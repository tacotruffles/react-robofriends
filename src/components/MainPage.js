import React, { Component } from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from '../hoc/Scroll';
import ErrorBoundary from './ErrorBoundary';

// CSS
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.filter.toLowerCase());
    });
  };

  render() {
    const { loading, filter, onSearchChange } = this.props;

    return loading ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox filter={onSearchChange} value={filter} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
