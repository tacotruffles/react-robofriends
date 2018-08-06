import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    filter: '',
    loading: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly for "John"', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail'
      },
      {
        id: 4,
        name: 'Sally',
        email: 'sally@gmail.com'
      }
    ],
    filter: 'John',
    loading: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail'
    }
  ]);
});

it('filters robots correctly for empty array', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail'
      },
      {
        id: 4,
        name: 'Sally',
        email: 'sally@gmail.com'
      }
    ],
    filter: 'zzz',
    loading: false
  };
  const emptyRobotArray = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(emptyRobotArray);
});
