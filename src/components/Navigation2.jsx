import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import "../css/Navigation3.css";

export const Navigation2 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="navega3">
      <Navbar expand="lg" expanded={expanded}>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navega33 ml-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tele">INSPECCION TELEVISIVA </NavDropdown.Item>
              <NavDropdown.Item href="/ambiental">SANEAMIENTO AMBIENTAL</NavDropdown.Item>
              <NavDropdown.Item href="/topografia">TOPOGRAFIA INTEGRAL</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/proyectos">PROYECTOS</Nav.Link>
            <Nav.Link href="/ubicanos">UBICANOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
