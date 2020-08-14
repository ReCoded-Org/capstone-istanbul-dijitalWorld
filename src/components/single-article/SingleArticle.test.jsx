import React from 'react';
import SingleArticle from './SingleArticle.jsx';
import { MemoryRouter } from 'react-router-dom';

it('renders SingleArticle component', () => {
  expect(
    <MemoryRouter>
      <SingleArticle />
    </MemoryRouter>,
  ).toMatchSnapshot();
});
