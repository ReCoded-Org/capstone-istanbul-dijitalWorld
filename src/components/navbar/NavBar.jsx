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

const ANONYMOUS_PHOTO_URL =
  'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg';

export default function NavBar({ routes }) {
  const dispatch = useDispatch();
  // In case user is logged out this variable will be null which will case the user picture not to render
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

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <>
      <Image
        className="userPhoto"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        src={userData.photoURL || ANONYMOUS_PHOTO_URL}
        roundedCircle
        style={{ width: '50px' }}
      />
    </>
  ));

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedOut(false);
        dispatch(userLoggedInAction(user));
      } else {
        setIsLoggedOut(true);
        dispatch(userLoggedInAction(null));
      }
    });
  });

  const [t, i18n] = useTranslation();

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
        <Dropdown.Item as="button" onClick={() => i18n.changeLanguage('en')}>
          EN
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => i18n.changeLanguage('tr')}>
          TR
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => i18n.changeLanguage('an')}>
          AR
        </Dropdown.Item>
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
