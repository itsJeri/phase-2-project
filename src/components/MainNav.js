import React, { useState, useEffect } from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';

function MainNav() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#tests">Tests</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNav;