import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Image, Form, Button, Container, Col, Alert } from 'react-bootstrap';
import Logo from '../../images/www-logo.png';
import { auth, googleProvider, facebookProvider } from '../../firebase';
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
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlret] = useState({
    show: false,
    message: '',
    status: '',
  });
  const [forgotPassword, setForgotPassword] = useState({
    show: false,
    email: '',
  });
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const changeAlert = (show, message = '', status) => {
    setAlret({
      show,
      status,
      message,
    });
  };

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
      setRedirect(true);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found": changeAlert(true, "User not found!", 'danger');
          break;
        case "auth/wrong-password": changeAlert(true, "Incorrect password!", 'danger');
          break;
      }
    }
  };

  const handleGoogleLogin = async () => {
    // googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    try {
      const result = await auth.signInWithPopup(googleProvider);
      setRedirect(true);
    } catch (error) {
      changeAlert(true, "Something went wrong! please try again.", 'danger');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await auth.signInWithPopup(facebookProvider);
      setRedirect(true);
    } catch (error) {
      changeAlert(true, "Something went wrong! please try again.", 'danger');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      await auth.sendPasswordResetEmail(forgotPassword.email);
      setForgotPassword({ email: "", show: false });
      changeAlert(true, "Password reset email was sent!", 'success');
    } catch (error) {
      changeAlert(true, "Email was not found!", 'danger');
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
          <Form.Control
            type="email"
            placeholder="Your email"
            value={loginInfo.email}
            onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className="mt-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={loginInfo.password}
            onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
          />
        </Form.Group>

        <Form.Group inline controlId="formBasicCheckbox" style={{ display: 'inline-block' }}>
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button inline variant="primary" type="submit" className="loginBtn ml-3">
          Login
        </Button>
      </Form>
      <p
        className="mt-3 forgotPassword"
        href="#home"
        onClick={() => setForgotPassword({ ...forgotPassword, show: !forgotPassword.show })}
      >
        Forgot your password?
      </p>

      {forgotPassword.show && (
        <Form onSubmit={handleForgotPassword}>
          <Form.Row className="align-items-center">
            <Col>
              <Form.Group controlId="formGridEmail" className="mt-3">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  value={forgotPassword.email}
                  onChange={(e) => setForgotPassword({ ...forgotPassword, email: e.target.value })}
                />
                <Form.Text className="text-muted">Send a password reset email</Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" className="loginBtn ml-5 mb-4">
                Send
              </Button>
            </Col>
          </Form.Row>
        </Form>
      )}

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
      <ColoredLine color="#D9DADC" width="20rem" />
      <p style={{ fontWeight: 'bold' }} href="#home">
        Don&apos;t have an account?
      </p>
      <Route
        render={({ history }) => (
          <Button className="googleBtn mb-3" onClick={() => history.push('/signup')}>
            Sign Up For WWW
          </Button>
        )}
      />
    </Container>
  );
};

export default LoginForm;
