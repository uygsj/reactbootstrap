import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../Products/Store/AuthContext'; // Import the AuthContext

const Header = () => {
  const authCtx = useContext(AuthContext);

  // Function to handle the logout
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
        <Nav.Link as={Link} to="/store">Store</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      </Nav>
      {/* Render the Login button or Logout button based on user authentication */}
      {authCtx.isLoggedIn ? (
        <button className="btn btn-primary" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      )}
    </Navbar>
  );
};

export default Header;
