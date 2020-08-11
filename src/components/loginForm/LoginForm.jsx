import React, { useState } from 'react';
import { Image, Form, Button, Container } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import { auth, googleProvider } from "../../firebase";
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
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container className="loginContainer">
      <Image src={Logo} className="loginLogo" />
      <Button className="googleBtn mt-3">
        <GoogleIcon className="mr-3" />
        Continue with Google
      </Button>
      <Button className="facebookBtn mt-3">
        <FacebookIcon className="mr-3" />
        Continue with Facebook
      </Button>
      <div style={{ display: 'flex' }}>
        <ColoredLine width="8rem" color="#D9DADC" />
        <span>Or</span>
        <ColoredLine width="8rem" color="#D9DADC" />
      </div>
      <Form onSubmit={handlePasswordLogin}>
        <Form.Group controlId="formGridEmail" className="mt-3">
          <Form.Control type="email" placeholder="Your email" value={loginInfo.email} onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className="mt-3">
          <Form.Control type="password" placeholder="Password" value={loginInfo.password} onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
        </Form.Group>

        <Form.Group inline controlId="formBasicCheckbox" style={{ display: 'inline-block' }}>
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button inline variant="primary" type="submit" className="loginBtn ml-3">
          Login
        </Button>
      </Form>
      <a className="mt-3 forgotPassword" href="#home">
        Forgot your password?
      </a>
      <ColoredLine color="#D9DADC" width="20rem" />
      <p style={{ fontWeight: 'bold' }} href="#home">
        Don&apos;t have an account?
      </p>
      <Button className="googleBtn mb-3">Sign Up For WWW</Button>
    </Container>
  );
};

export default LoginForm;
