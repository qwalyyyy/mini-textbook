import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Reactlogo from "./images/reactlogo.svg";
import Vector from "./images/Vector.svg";
import "./header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={Reactlogo}
            height="40"
            width="40"
            className="d-inline-block align-top logo"
            alt="Epic Games"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link as={NavLink} to="/documentation" className="nav-link">
              DOCS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tutorial" className="nav-link">
              TUTORIAL
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/" className="nav-link">
              <img
                src={Vector}
                height="20"
                width="16"
                className="vector"
                alt="Profile"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
