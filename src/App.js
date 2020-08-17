import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import BlogCard from './components/blog-cards/BlogCard';
import SingleArticle from './components/single-article/SingleArticle';
import Footer from './components/footer/Footer';
import InspirePage from './containers/inspirePage/InspirePage';
import About from './containers/about/About';
import LoginPage from './containers/loginPage/LoginPage';
import SignupPage from './containers/signupPage/SignupPage';
import ProfilePage from './containers/profile/ProfilePage';
import ContactUsPage from "./containers/contactUs/ContactUsPage"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// This array will be mapped through to create the routes
// Home component is a placeholder until other components are created
const ROUTES = [
  { path: '/', name: 'home', Component: Home },
  { path: '/blog', name: 'blog', Component: BlogCard },
  { path: '/inspire', name: 'inspire', Component: InspirePage },
  { path: '/resources', name: 'resource', Component: Home },
  { path: '/about', name: 'about', Component: About },
  { path: '/contact', name: 'contact', Component: ContactUsPage },
];

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/blog/:id" render={(props) => <SingleArticle {...props} />} />
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}

export { App, LocationDisplay };
