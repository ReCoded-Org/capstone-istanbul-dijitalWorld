import React from 'react';
import renderer from 'react-test-renderer';
import Newsletter from './Newsletter';

it('Renders succesfully.', () => {
  const tree = renderer.create(<Newsletter />).toJSON();
  expect(tree).toMatchSnapshot();
});
