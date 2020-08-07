import React from 'react';
import { Nav } from 'react-bootstrap/';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './NavBar.css';

function NavLinks({ routes }) {
  const { t } = useTranslation();

  return (
    <>
      {routes.map((route) => (
        <Nav.Link className="navLinkText" key={route.path} href={route.path}>
          {t(`home.navBar.navLinks.${route.name}`)}
        </Nav.Link>
      ))}
    </>
  );
}

NavLinks.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

NavLinks.defaultProps = {
  routes: [
    {
      path: '/',
      name: 'home',
    },
  ],
};

export default NavLinks;
