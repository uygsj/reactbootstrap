import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Products/Store/AuthContext';

const Header = () => {
  const authCtx = useAuth();

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
    {authCtx.isLoggedIn ? (
      <>
       
          <Link to="/profile" className="btn btn-primary  mr-2">Profile</Link>
        
        <button className="btn btn-primary" onClick={logoutHandler}>
          Logout
        </button>
      </>
    ) : (
      <>
        
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </Navbar>
      </>
    )}
    </>
  );
};

export default Header;
