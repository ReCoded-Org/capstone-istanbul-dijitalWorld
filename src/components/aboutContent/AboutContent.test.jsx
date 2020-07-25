import React from 'react';
import AboutContent from './AboutContent';
import renderer from 'react-test-renderer';

it('about content renders correctly', () => {
  const tree = renderer.create(<AboutContent />).toJSON();
  expect(tree).toMatchSnapshot();
});