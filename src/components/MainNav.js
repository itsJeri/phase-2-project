import React from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainNav() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/tests">Tests</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNav;