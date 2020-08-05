import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import InspirePage from './containers/inspirePage/InspirePage';

// This array will be mapped throught to create the routes
// Home component is a placeholder until other components are created
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/blog', name: 'Blog', Component: Home },
  { path: '/inspire', name: 'inspire', Component: InspirePage },
  { path: '/resources', name: 'Resources', Component: Home },
  { path: '/about', name: 'About', Component: Home },
  { path: '/contact', name: 'Contact', Component: Home },
];

function App() {
  return (
    <Router className="App">
      <NavBar routes />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
      <Footer />
    </Router>
  );
}

export default App;
