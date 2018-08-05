import React from 'react';
// shallow = silbings rendered only
// mount = renders with DOM
// render = renders to static HTML
import { shallow } from 'enzyme';
import Card from './Card';

// Shallow render to test card component only - no children
it('expect to render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
