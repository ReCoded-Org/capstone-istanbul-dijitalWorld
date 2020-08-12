import React from 'react';
import BlogCard from './BlogCard.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<BlogCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
