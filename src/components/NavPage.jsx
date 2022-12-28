import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'

import '../styles.css'

const Navpage = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  className='text-nav' variant="#1E1E24">
      <Container>
        <Navbar.Brand href="/" className='mg-push'><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav bg-white"  />
        <Navbar.Collapse id="responsive-navbar-nav" className='margin-push overflow-none'>
          <Nav className="me-auto">
            <Nav.Link href="/start">About Us</Nav.Link>
            <Nav.Link href="/chat">Academy</Nav.Link>
            <Nav.Link href="/services">Products</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/services">Careers</Nav.Link>
          </Nav>
          <Nav.Link href='/start'>
            <button className='navButton'>Get Started</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navpage;