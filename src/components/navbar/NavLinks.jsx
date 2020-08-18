import React from 'react';
import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './NavBar.css';

function NavLinks({ routes }) {
  const { t } = useTranslation();

  return (
    <>
      {routes.map((route) => (
        <NavLink className="navLinkText nav-link" key={route.path} to={route.path}>
          {t(`home.navBar.navLinks.${route.name}`)}
        </NavLink>
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
