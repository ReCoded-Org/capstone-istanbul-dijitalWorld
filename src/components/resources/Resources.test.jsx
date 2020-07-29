import React from 'react';
import renderer from 'react-test-renderer';
import Resources from './Resources';

it('Matches the snapshot.', () => {
  const tree = renderer.create(<Resources />).toJSON();
  expect(tree).toMatchSnapshot();
});