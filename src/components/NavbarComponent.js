import React, { useState, useEffect } from 'react';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';

const NavbarComponent = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = logo;
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navbarClasses = `navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`;  

  return (
    <Navbar fixed="top" className={navbarClasses} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          {logoLoaded && (
            <img
              src={logo}
              height="40"
              className="d-inline-block align-center"
              alt="Kitty Corner logo"
            />
          )}
          {' '}
          KITTY CORNER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ marginRight: '20px' }}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              style={{ marginRight: '20px' }}
              menuProps={{ className: 'custom-dropdown' }}
            >
              <NavDropdown.Item href="/services/catSalon">Cat Salon</NavDropdown.Item>
              <NavDropdown.Item href="/services/catHotel">Cat Hotel</NavDropdown.Item>
              <NavDropdown.Item href="/services/catShop">Cat Shop</NavDropdown.Item>
              <NavDropdown.Item href="/services/catAdoption">Cat Adoption</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Facilities"
              id="basic-nav-dropdown"
              style={{ marginRight: '20px' }}
              menuProps={{ className: 'custom-dropdown' }}
            >
              <NavDropdown.Item href="/facilities/cafe">Cafe</NavDropdown.Item>
              <NavDropdown.Item href="/facilities/catPlayground">Cat Playground</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aboutUs" style={{ marginRight: '20px' }}>
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.1rem' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
