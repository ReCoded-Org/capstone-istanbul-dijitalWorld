import React from 'react';
import AboutCarousel from './AboutCarousel';
import renderer from 'react-test-renderer';

it('about carousel renders correctly', () => {
  const tree = renderer.create(<AboutCarousel />).toJSON();
  expect(tree).toMatchSnapshot();
});
