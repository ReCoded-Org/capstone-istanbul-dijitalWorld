import React from 'react';
import renderer from 'react-test-renderer';
import SignupForm from './SignupForm';

it('renders correctly', () => {
  const tree = renderer.create(<SignupForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
