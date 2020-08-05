import React from 'react';
import { Nav } from 'react-bootstrap/';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

export default function NavLinks({ routes }) {
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
