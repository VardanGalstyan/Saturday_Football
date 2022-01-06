import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './style.css'

function TopNavbar() {
    return (
        <Container className='navbar-container' fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">ACTIVE GAMES</Nav.Link>
                        <Nav.Link href="#pricing">HISTORY</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="PROFILE SETTINGS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">EDIT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">LOG OUT</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default TopNavbar
