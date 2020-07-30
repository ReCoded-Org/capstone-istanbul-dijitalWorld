import React from 'react';
import renderer from 'react-test-renderer';
import Newsletter from './Newsletter';

it('Matches the snapshot.', () => {
  const tree = renderer.create(<Newsletter />).toJSON();
  expect(tree).toMatchSnapshot();
});
