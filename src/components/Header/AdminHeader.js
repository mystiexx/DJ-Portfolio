import React, { Component } from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";

export class AdminHeader extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand><h2 className="nav-brand">DJ</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">DashBoard</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#event">Event</Nav.Link>
                            <Nav.Link href="#booking">Booking</Nav.Link>
                            <Nav.Link href="#mixtape">Mixtape</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
             
                {this.props.children}
                
            </div>
        );
    }
}

export default AdminHeader;
