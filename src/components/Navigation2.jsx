import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/Navigation3.css";
 
export const Navigation2 = () => {
  return (
    <div className="navega3">
    

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
       
   
    </div>
  );
};