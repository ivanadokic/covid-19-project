import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'


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
            <LinkContainer to="/countries/form"><Nav.Link to="/countries"> Search by Country</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <h1>COVID-19 World Tracker</h1>
        <p>
          This is a Covid-19 live case tracker.
        </p>

      </Jumbotron>
    </div >
  );
}

export default NavBar;