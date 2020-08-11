import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import InspirePage from './containers/inspirePage/InspirePage';
import About from './containers/about/About';
import LoginPage from "./containers/loginPage/LoginPage";

// This array will be mapped through to create the routes
// Home component is a placeholder until other components are created
const ROUTES = [
  { path: '/', name: 'home', Component: Home },
  { path: '/blog', name: 'blog', Component: Home },
  { path: '/inspire', name: 'inspire', Component: InspirePage },
  { path: '/resources', name: 'resource', Component: LoginPage },
  { path: '/about', name: 'about', Component: About },
  { path: '/contact', name: 'contact', Component: Home },
];

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  return (
    <Router className="App">
      <NavBar routes={ROUTES} />
      {ROUTES.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Footer />
    </Router>
  );
}

export { App, LocationDisplay };
