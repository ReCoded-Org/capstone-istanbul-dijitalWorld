import React from 'react';
import { Image, Form, Button, Container } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import { ReactComponent as GoogleIcon } from '../../images/googleicon.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebookicon.svg';
import './LoginForm.css';

const ColoredLine = ({ color, width }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      width,
    }}
  />
);

const LoginForm = () => {
  return (
    <Container className="loginContainer">
      <Image src={Logo} className="loginLogo" />
      <Button className="googleBtn">
        <GoogleIcon className="mr-3 mt-3" />
        Continue With Google
      </Button>
      <Button className="facebookBtn mt-3">
        <FacebookIcon className="mr-3" />
        Continue With Facebook
      </Button>
      <hr className="orText" />
      <Form>
        <Form.Group controlId="formGridEmail" className="mt-3">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className="mt-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group inline controlId="formBasicCheckbox" style={{ display: 'inline-block' }}>
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button inline variant="primary" type="submit" className="loginBtn ml-3">
          Login
        </Button>
      </Form>
      <a className="mt-3 forgotPassword" href="#home">
        forgot your password ?
      </a>
      <ColoredLine color="#D9DADC" width="20rem" />
      <p style={{ fontWeight: 'bold' }} href="#home">
        Don&apos;t have an account ?
      </p>
      <Button className="googleBtn">SIGN UP FOR WWW</Button>
    </Container>
  );
};

export default LoginForm;
