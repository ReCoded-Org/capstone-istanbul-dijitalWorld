import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Quotes from './Quotes';
import renderer from 'react-test-renderer';
        
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quotes />, div);

it('renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
