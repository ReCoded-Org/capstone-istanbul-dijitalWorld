import React from 'react';
import { Image, Form, Col, Button, Container } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <Container className="signupContainer">
      <Image src={Logo} className="logo" />
      <h2 className="signupHeader">Signup Now</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName" className="mt-3">
            <Form.Control type="name" placeholder="FirstName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName" className="mt-3">
            <Form.Control type="name" placeholder="LastName" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail" className="mt-3">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mt-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRepeatPassword" className="mt-3">
            <Form.Control type="password" placeholder="Repeat Password" />
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
