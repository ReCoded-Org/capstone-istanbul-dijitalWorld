import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from '../../redux/reducers';

const store = createStore(
  allReducers,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
);

const routes = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
  { path: '/inspire', name: 'inspire' },
  { path: '/resources', name: 'resource' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

it('Navbar renders correctly', () => {
  const div = renderer
    .create(
      <Provider store={store}>
        <Router>
          <NavBar routes={routes} />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(div).toMatchSnapshot();
});
