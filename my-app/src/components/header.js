import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import epicGamesLogo from './images/eplogo.png';
import Vector from './images/Vector.svg';
import './header.css'; // Подключаем файл стилей для дополнительного оформления
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    
import Home from "../pages/Home";
import AllProject from "../pages/Allproject";
import Profile from "../pages/Profile";
import Project from "../pages/Project";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={epicGamesLogo}
                                height="40"
                                width="40"
                                className="d-inline-block align-top logo"
                                alt="Epic Games"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                            <Nav>
                                <NavDropdown title="" id="basic-nav-dropdown" className="custom-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Игра 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Игра 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Игра 3</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/allproject">SALE!</Nav.Link>
                                <Nav.Link href="/project">TOP</Nav.Link>
                                <Nav.Link href="/">STORE</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/profile">
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

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={< Project/>} />
                    <Route path="/allproject" element={<AllProject />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        )
    }
}