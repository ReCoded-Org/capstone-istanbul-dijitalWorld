import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <LoginForm />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
