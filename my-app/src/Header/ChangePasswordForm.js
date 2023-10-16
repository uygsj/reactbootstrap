import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Products/Stored/AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB_dkiZLarsll9ax2EExsD9wzsvIZ_wSAo', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            setError(data.error.message); // Set error message if the request fails
            throw new Error(data.error.message); // Also throw an error to be caught in the next .catch block
          })
        }
        
        return res.json();
      })
      .then(() => {
        alert('Password changed successfully!');
        navigate('/');
      })
      .catch((error) => {
        // Error will be caught here if there was an error during the fetch request
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="new-password">New Password</Form.Label>
          <Form.Control
            type="password"
            id="new-password"
            minLength="6"
            ref={newPasswordInputRef}
          />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Change Password
          </Button>
        </div>
      </Form>
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default ChangePasswordForm;
