import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

  return (
    <div >
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">COVID-19 World Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/summary"><Nav.Link to="/summary"> Global Cases</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/countries"><Nav.Link to="/countries"> Cases by Country</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div >
  );
}

export default NavBar;