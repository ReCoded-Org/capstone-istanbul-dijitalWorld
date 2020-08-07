import React, { useState } from 'react';
import { Image, Form, Col, Button, Container } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import './SignupForm.css';

const SignupForm = () => {
  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleSignup = () => {};

  return (
    <Container className="signupContainer">
      <Image src={Logo} className="signupLogo" />
      <Form onSubmit={handleSignup}>
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
