import React from 'react';
import {Nav, Navbar, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import logo from '../assets/img/logo.png';

const NavbarComponent = () => {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-center"
            alt="Kitty Corner logo"
          />
          {' '}
        KITTY CORNER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#services/petSalon">Pet Salon</NavDropdown.Item>
              <NavDropdown.Item href="#services/petHotel">Pet Hotel</NavDropdown.Item>
              <NavDropdown.Item href="#services/petShop">Pet Shop</NavDropdown.Item>
              <NavDropdown.Item href="#services/petAdoption">Pet Adoption</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Facilities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#facilities/cafe">Café</NavDropdown.Item>
              <NavDropdown.Item href="#facilities/catPlayground">Cat Playground</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/*<FormControl type="text" placeholder="Search" className="me-2" 
            aria-label="Search"/>*/}
            <Button variant="outline-success">Sign In</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
