import React from 'react';
import Inspire from './Inspire';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Inspire />).toJSON();
  expect(tree).toMatchSnapshot();
});
