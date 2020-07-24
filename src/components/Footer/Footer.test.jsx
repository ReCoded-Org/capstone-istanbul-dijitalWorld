import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

it("Matches the snapshot.", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
