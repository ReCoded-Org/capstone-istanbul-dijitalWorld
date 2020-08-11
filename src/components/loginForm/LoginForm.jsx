import React, { useState } from 'react';
import { Route } from "react-router-dom";
import { Image, Form, Button, Container } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import { auth, googleProvider, facebookProvider } from "../../firebase";
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

  const handleGoogleLogin = async () => {
    // googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleFacebookLogin = async () => {
    try {
      const result = await auth.signInWithPopup(facebookProvider);
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container className="loginContainer">
      <Image src={Logo} className="loginLogo" />
      <Button className="googleBtn mt-3" onClick={handleGoogleLogin}>
        <GoogleIcon className="mr-3" />
        Continue with Google
      </Button>
      <Button className="facebookBtn mt-3" onClick={handleFacebookLogin}>
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
      <Route render={({ history }) => (
        <Button className="googleBtn mb-3" onClick={() => history.push("/signup")}>Sign Up For WWW</Button>
      )} />

    </Container>
  );
};

export default LoginForm;
