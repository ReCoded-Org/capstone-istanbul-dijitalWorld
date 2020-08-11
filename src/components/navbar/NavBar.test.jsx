import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';
import { BrowserRouter as Router } from "react-router-dom";

const routes = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
  { path: '/inspire', name: 'inspire' },
  { path: '/resources', name: 'resource' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

it('Navbar renders correctly', () => {
  const div = renderer.create(<Router><NavBar routes={routes} /></Router>).toJSON();
  expect(div).toMatchSnapshot();
});
