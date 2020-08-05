import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LocationDisplay } from './App';

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory();
  const route = '/about';
  history.push(route);
  const { getByTestId } = render(
    <Router history={history}>
      <LocationDisplay />
    </Router>,
  );
  expect(getByTestId('location-display')).toHaveTextContent(route);
});
