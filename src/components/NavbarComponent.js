import React from 'react';
import {Nav, Navbar, NavDropdown, Form, Button, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.png';

const NavbarComponent = () => {
  return (
      <Navbar variant="dark" expand="lg">
        <Container>
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
            <Nav.Link href='/home'>Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href='/services/catSalon'>Cat Salon</NavDropdown.Item>
              <NavDropdown.Item href='/services/catHotel'>Cat Hotel</NavDropdown.Item>
              <NavDropdown.Item href='/services/catShop'>Cat Shop</NavDropdown.Item>
              <NavDropdown.Item href='/services/catAdoption'>Cat Adoption</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Facilities" id="basic-nav-dropdown">
              <NavDropdown.Item href='/facilities/cafe'>Cafe</NavDropdown.Item>
              <NavDropdown.Item href='/facilities/catPlayground'>Cat Playground</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/aboutUs'>About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Sign In</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarComponent;
