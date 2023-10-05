import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      
      <Nav className="mr-auto">
      <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>


        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
        <Nav.Link as={Link} to="/store">Store</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
