import React from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <NavDropdown title="Otellər" className="basic-nav-dropdown ">
                  <NavDropdown.Item className="nav-dropdown-item ss" href="#">
                    <Link className="navs" to={"/"}>
                      Azerbaycanda
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="nav-dropdown-item" href="#">
                    <Link className="navs" to={"/"}>
                      Dünyada
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <Link className="navs" to={"/"}>
                    Sign In
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <Link className="navs" to={"/"}>
                    Sign In
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <Link className="navs" to={"/"}>
                    Sign In
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <Link className="navs" to={"/"}>
                    Sign In
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-sign-in" href="/signin">
                  <Link className="navs" to={"/"}>
                    Sign In
                  </Link>
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
