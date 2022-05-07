import React from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";

import "../../assets/sass/layout/header.scss";
function Header() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <Navbar className="sticky-nav" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavbarBrand href="/">
                  <img
                    className="images"
                    src={require("../../assets/img/home/logo.png")}
                    alt=""
                  />
                </NavbarBrand>
                <NavDropdown title="Otellər" className="basic-nav-dropdown">
                  <NavDropdown.Item className="nav-dropdown-item" href="#">
                    <a href="">Sign-In</a>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="nav-dropdown-item" href="#">
                    <a href="">Sign-In</a>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <a href="">Sign-In</a>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <a href="">Sign-In</a>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <a href="">Sign-In</a>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <a href="">Sign-In</a>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <a href="">Sign-In</a>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
