import React, { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import AuthContext from '../Products/Store/AuthContext'; // Adjust the path based on your project structure

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;
  
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_dkiZLarsll9ax2EExsD9wzsvIZ_wSAo';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_dkiZLarsll9ax2EExsD9wzsvIZ_wSAo';
    }
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (isLogin) {
          console.log('Login Completed');
          localStorage.setItem('email', enteredEmail);
          localStorage.setItem('authToken', data.idToken); // Store the token in localStorage
          authCtx.login(data.idToken);
          console.log(data);
          alert('Log In Successful');
        } else {
          console.log('Sign up Completed');
          alert('Sign Up Successful');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
 
     

  return (
    <Container className="pt-5">
      <>
        <Form onSubmit={submitHandler} className="pt-3">
          <h1 className="text-center">{isLogin ? 'Log In' : 'Sign Up'}</h1>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control ref={emailInputRef} id="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control ref={passwordInputRef} id="password" type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>

          <div className="text-center pt-3">
            <Button variant="secondary" onClick={switchAuthModeHandler}>
              {isLogin ? 'Create a new account' : 'Login with an existing account'}
            </Button>
          </div>
        </Form>
      </>
    </Container>
  );
};

export default Login;