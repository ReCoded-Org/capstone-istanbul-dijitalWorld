import React from 'react';
import { Image, Form, Col, Button, Container } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <Container className="signUp">
      <Image src={Logo} className="logo" />
      <h2>Signup Now</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Control type="name" placeholder="FirstName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control type="name" placeholder="LastName" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRepeatPassword">
            <Form.Control type="password" placeholder="Repeat Password" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" className="signupBtn">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
