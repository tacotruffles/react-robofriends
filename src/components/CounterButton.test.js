import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

// Shallow render to test CounterButton component only - no children
it('expect to render CounderButton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correct counter increment value', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  // Check counter state
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });

  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 2 });

  // Check props - color = red
  expect(wrapper.props().color).toEqual('red');
});
