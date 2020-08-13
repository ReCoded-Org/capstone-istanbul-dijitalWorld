import React from 'react';
import { Navbar, Nav, Dropdown, DropdownButton, Button } from 'react-bootstrap/';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import { Route } from 'react-router-dom';
import './NavBar.css';
import { Route } from 'react-router-dom';

export default function NavBar({ routes }) {
  const { t } = useTranslation();

  return (
    <Navbar className="navbar" data-testid="navbar" expand="sm">
      <Navbar.Brand className="navbarBrand" href="#home">
        <img
          data-testid="brand-logo"
          src={require('../../images/www-logo.png')}
          className="brandLogo d-inline-block align-top"
          alt="World with Women Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="navbarMainContent" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse data-testid="navbar-collapse" id="basic-navbar-nav">
        <Nav className="navLinksContainer">
          <NavLinks routes={routes} />
        </Nav>
        <div className="buttonGroup">

         <Route
            render={({ history }) => (
              <Button className="signupFilledButton" onClick={() => history.push('/signup')}>
                {t('home.navBar.buttons.signup')}
              </Button>
            )}
          ></Route>
          <Route
            render={({ history }) => (
              <Button
                className="loginOutlinedButton"
                variant="outline"
                onClick={() => history.push('/login')}
              >
                {t('home.navBar.buttons.login')}
              </Button>
            )}
          />

        </div>
      </Navbar.Collapse>
      <DropdownButton
        alignRight
        variant="none"
        id="dropdown-item-button"
        className="dropdownItemButton"
        title="EN"
      >
        <Dropdown.Item as="button">EN</Dropdown.Item>
        <Dropdown.Item as="button">TR</Dropdown.Item>
        <Dropdown.Item as="button">AR</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
}

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

NavBar.defaultProps = {
  routes: [
    {
      path: '/',
      name: 'home',
    },
  ],
};
