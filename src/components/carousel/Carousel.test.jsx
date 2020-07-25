import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from './Carousel';

it('Carousel renders correctly', () => {
  const tree = renderer.create(<Carousel />).toJSON();
  expect(tree).toMatchSnapshot();
});
