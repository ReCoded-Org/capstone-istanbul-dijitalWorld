import React from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap/";
import NavLinks from "./NavLinks";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <Navbar className="navbar" data-testid="navbar" expand="sm | md">
      <Navbar.Brand className="navbarBrand" href="#home">
        <img
          data-testid="brand-logo"
          src={require("../../images/WwwLogo.png")}
          className="brandLogo d-inline-block align-top"
          alt="World with Women Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbarMainContent"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse data-testid="navbar-collapse" id="basic-navbar-nav">
        <Nav className="navLinksContainer">
          <NavLinks />
        </Nav>
        <div className="buttonGroup">
          <Button className="filledButton">
            {t("home.navBar.buttons.signup")}
          </Button>
          <Button className="outlinedButton" variant="outline">
            {t("home.navBar.buttons.login")}
          </Button>
        </div>
      </Navbar.Collapse>
      <DropdownButton
        alignRight
        variant="secondary"
        id="dropdown-item-button"
        title="EN"
      >
        <Dropdown.Item as="button">EN</Dropdown.Item>
        <Dropdown.Item as="button">TR</Dropdown.Item>
        <Dropdown.Item as="button">AR</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
}
