import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

it('Navbar renders correctly', () => {
  const div = renderer.create(<NavBar />).toJSON();
  expect(div).toMatchSnapshot();
});
