import React, { useState } from 'react';
import { Image, Form, Col, Button, Container, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
import Logo from '../../images/www-logo.png';
import './SignupForm.css';

const SignupForm = () => {
  // This state manages the redirecting to the home page that happens after a successful signup
  const [redirect, setRedirect] = useState(false);
  // Alert is null if not present. If present, has two keys, message and status.
  // Status's value will decide the appearance of the alert
  const [alert, setAlert] = useState(null);
  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // This function uses firebase auth to register the user
  // In case of any error it will change the alert state to render a component that shows an error message to the user
  // If the login was successful it will show  a success alert message and then redirect the user to the home page
  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupInfo.password !== signupInfo.repeatPassword) {
      setAlert({ message: "Passwords doesn't match", status: 'danger' });
      return;
    }
    try {
      const response = await auth.createUserWithEmailAndPassword(
        signupInfo.email,
        signupInfo.password,
      );
      response.user.sendEmailVerification();
      response.user.updateProfile({
        displayName: signupInfo.firstName + " " + signupInfo.lastName,
      })
    } catch (error) {
      setAlert({ message: error.message, status: 'danger' });
      return;
    }
    setSignupInfo({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
    setAlert({ message: 'Your registration is completed!', status: 'success' });
    setTimeout(() => setRedirect(true), 1000);
  };

  const handleChange = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
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
              onChange={handleChange('firstName')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName" className="mt-3">
            <Form.Control
              required
              type="name"
              placeholder="Last name"
              value={signupInfo.lastName}
              onChange={handleChange('lastName')}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail" className="mt-3">
          <Form.Control
            type="email"
            placeholder="Your email"
            value={signupInfo.email}
            onChange={handleChange('email')}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mt-3">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={signupInfo.password}
              onChange={handleChange('password')}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRepeatPassword" className="mt-3">
            <Form.Control
              required
              type="password"
              placeholder="Repeat password"
              value={signupInfo.repeatPassword}
              onChange={handleChange('repeatPassword')}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" className="signupBtn mt-3">
          Sign Up
        </Button>
      </Form>
      {alert && (
        <Alert className="mt-3" variant={alert.status} onClose={() => setAlert(null)} dismissible>
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
