import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown, DropdownButton, Button, Image } from 'react-bootstrap/';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedInAction } from '../../redux/action';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import { Route } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ routes }) {
  const dispatch = useDispatch();
  // Incase user is logged out this variable will be null which will case the user picture not to render
  const userData = useSelector((state) => state.currentUserDataReducer);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const loginSignupButton = (
    <>
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
    </>
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedOut(false);
        // Providerdata's value contains an array that has the user's info in the first index as an object
        dispatch(userLoggedInAction(user.providerData[0]));
      } else {
        dispatch(userLoggedInAction(null));
        setIsLoggedOut(true);
      }
    });
  });

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
          {userData && (
            <Image
              onClick={() => auth.signOut()}
              src={userData.photoURL}
              roundedCircle
              style={{ width: '50px' }}
            />
          )}
          {isLoggedOut && loginSignupButton}
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
