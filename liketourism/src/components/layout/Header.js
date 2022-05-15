import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

import "../../assets/sass/layout/header.scss";

function Header() {
  return (
    <div>
      <Navbar
        className="sticky"
        
        expand="lg"
        
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="imagelogo"
              style={{ width: "200px" }}
              src={require("../../assets/img/home/logo.png")}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown className="navdropdown" title="Otellər" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                <b>Azərbaycanda</b>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <b>Dünyada</b>
                </NavDropdown.Item>
               
              </NavDropdown>
              <Nav.Link className="navlinks" href="#features"><b>Uçuş biletləri</b></Nav.Link>
              <Nav.Link className="navlinks" href="#pricing"><b>Features</b></Nav.Link>
              <Nav.Link className="navlinks" href="#pricing"><b>
              <Link to="/Tours">Görməli yerlər</Link>

              </b></Nav.Link>
              <Nav.Link className="navlinks" href="#pricing"><b>Haqqında</b></Nav.Link>
              <Nav.Link className="navlinks" href="#pricing"><b>Əlaqə</b></Nav.Link>

            
            </Nav>
            <Nav  className="navlinks">
            <Nav.Link href="#deets">
            <select>
            <option value="">Az</option>
            <option value="">En</option>

            

        </select>
            </Nav.Link>

              <Nav.Link href="#deets"><b>Login</b></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <b>Register</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
