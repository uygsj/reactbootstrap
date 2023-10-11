import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Products/Store/AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null); // State to track error message

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA1b-lvn7ZcqvlxQGq9ZwaUnlNSq7TY6IQ', {
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
        if (res.ok) {
          setIsSuccess(true);
        } else {
          return res.json().then((data) => {
            setError(data.error.message); // Set error message if the request fails
          });
        }
      })
      .then((data) => {
        if (isSuccess) {
          navigate('/');
        }
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
      {isSuccess && alert('Password changed successfully!')}
    </Container>
  );
};

export default ChangePasswordForm;
