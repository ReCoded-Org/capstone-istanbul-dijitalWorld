import React from 'react';
import { Nav } from 'react-bootstrap/';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

export default function NavLinks() {
  const { t } = useTranslation();

  return (
    <>
      <Nav.Link className="navLinkText" href="#home">
        {t('home.navBar.navLinks.home')}
      </Nav.Link>
      <Nav.Link className="navLinkText" href="#home">
        {t('home.navBar.navLinks.blog')}
      </Nav.Link>
      <Nav.Link className="navLinkText" href="#home">
        {t('home.navBar.navLinks.inspire')}
      </Nav.Link>
      <Nav.Link className="navLinkText" href="#home">
        {t('home.navBar.navLinks.resource')}
      </Nav.Link>
      <Nav.Link className="navLinkText" href="/about">
        {t('home.navBar.navLinks.about')}
      </Nav.Link>
      <Nav.Link className="navLinkText" href="#home">
        {t('home.navBar.navLinks.contact')}
      </Nav.Link>
    </>
  );
}
