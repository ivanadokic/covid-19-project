import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">COVID-19 World Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/new"> Create a New Collection</Nav.Link>
                        <Nav.Link to="/countries"> View all data for selected Country</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div >
    );
}

export default NavBar;