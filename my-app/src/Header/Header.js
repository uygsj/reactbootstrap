import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../Products/Stored/AuthContext';

const Header = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    localStorage.removeItem('authToken'); // Remove the token from localStorage on logout
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/">The Generics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {authCtx.isLoggedIn ? (
            <>
              <Link to="/profile" className="btn btn-primary mr-2">
                Profile
              </Link>
              <button className="btn btn-primary mr-2" onClick={logoutHandler}>
                Logout
              </button>
              <Link to="/changepasswordform" className="btn btn-primary mr-2">
                Change Password
              </Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              {!authCtx.isLoggedIn && (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
