import React, { useState } from 'react';
import { Image, Form, Col, Button, Container, Alert } from 'react-bootstrap';
import { auth } from '../../firebase';
import Logo from '../../images/www-logo.png';
import './SignupForm.css';

const SignupForm = () => {
  const [alert, setAlret] = useState({
    status: false,
    message: '',
  });

  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(signupInfo.email, signupInfo.password);

      setSignupInfo({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
      });
      setAlret({
        status: false,
        message: '',
      });
    } catch (error) {
      setAlret({
        status: true,
        message: error.message,
      });
      console.log(error.message);
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
      {alert.status && (
        <Alert
          className="mt-3"
          variant="danger"
          onClose={() => setAlret({ ...alert, status: false })}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}
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
