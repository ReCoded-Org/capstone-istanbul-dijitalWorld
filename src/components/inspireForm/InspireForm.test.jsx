import React from 'react';
import InspireForm from './InspireForm';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<InspireForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
