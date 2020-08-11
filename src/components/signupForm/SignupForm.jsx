import React, { useState } from 'react';
import { Image, Form, Col, Button, Container, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
import Logo from '../../images/www-logo.png';
import './SignupForm.css';

const SignupForm = () => {
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlret] = useState({
    show: false,
    message: '',
    status: '',
  });
  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const changeAlert = (show, message = '', status) => {
    setAlret({
      show,
      status,
      message,
    });
  };

  // This function use firebase auth to register the user
  // Incase of errors it will change the alret state to render a componenet to show the error message to the user
  // If the login was a success it shows a success alret msg and then redirect the user to the home page
  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupInfo.password === signupInfo.repeatPassword) {
      try {
        const response = await auth.createUserWithEmailAndPassword(signupInfo.email, signupInfo.password);
        setSignupInfo({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          repeatPassword: '',
        });
        changeAlert(true, 'Your registration is completed!', 'success');
        setTimeout(() => setRedirect(true), 1000);
      } catch (error) {
        changeAlert(true, error.message, 'danger');
      }
    } else {
      changeAlert(true, "Passwords doesn't match", 'danger');
    }
  };

  return (
    <Container className="signupContainer">
      <Image src={Logo} className="signupLogo" />
      <Form onSubmit={handleSignup} className="form">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName" className="mt-3">
            <Form.Control
              required
              type="name"
              placeholder="First name"
              value={signupInfo.firstName}
              onChange={(e) => setSignupInfo({ ...signupInfo, firstName: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName" className="mt-3">
            <Form.Control
              required
              type="name"
              placeholder="Last name"
              value={signupInfo.lastName}
              onChange={(e) => setSignupInfo({ ...signupInfo, lastName: e.target.value })}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail" className="mt-3">
          <Form.Control
            type="email"
            placeholder="Your email"
            value={signupInfo.email}
            onChange={(e) => setSignupInfo({ ...signupInfo, email: e.target.value })}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mt-3">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={signupInfo.password}
              onChange={(e) => setSignupInfo({ ...signupInfo, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRepeatPassword" className="mt-3">
            <Form.Control
              required
              type="password"
              placeholder="Repeat password"
              value={signupInfo.repeatPassword}
              onChange={(e) => setSignupInfo({ ...signupInfo, repeatPassword: e.target.value })}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" className="signupBtn mt-3">
          Sign Up
        </Button>
      </Form>
      {alert.show && (
        <Alert
          className="mt-3"
          variant={alert.status}
          onClose={() => setAlret({ ...alert, show: false })}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}
      {redirect && <Redirect to="/" />}
      <p className="mt-3">
        Already Have An Account ?{' '}
        <a href="/login" className="loginLink">
          Login
        </a>
      </p>
    </Container>
  );
};

export default SignupForm;
