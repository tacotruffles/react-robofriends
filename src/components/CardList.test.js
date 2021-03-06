import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

// Shallow render to test CardList component only - no children
it('expect to render CardList component', () => {
  // Mock some robots, yo
  const mockRobots = [
    {
      id: 1,
      name: 'Johnny Boy',
      username: 'Jon',
      email: 'john@gmail.com'
    }
  ];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
