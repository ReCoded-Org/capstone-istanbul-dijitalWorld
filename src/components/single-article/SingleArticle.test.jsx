import React from 'react';
import SingleArticle from './SingleArticle.jsx';
import { MemoryRouter } from 'react-router-dom';

it('renders Navbar component', () => {
  expect(
    <MemoryRouter>
      <SingleArticle />
    </MemoryRouter>,
  ).toMatchSnapshot();
});
