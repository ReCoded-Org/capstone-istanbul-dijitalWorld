import React, { useState } from 'react';
import './Profile.css';
import { Container, Col, Row, Image, Modal, Button, Form, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedInAction } from '../../redux/action';
import { auth } from '../../firebase';
import { ANONYMOUS_PHOTO_URL } from '../../images/anonymous';

export default function Profile() {
  const currentUser = auth.currentUser;
  // Alert state would be changed into an object with 2 keys
  // First key will be the message the alert would display
  // Second key will be the color of the alert success for green danger for red
  const [alert, setAlert] = useState(null);
  const [formUserInfo, setFormUserInfo] = useState({
    displayName: '',
    email: '',
    photoURL: '',
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUserDataReducer);
  const { t } = useTranslation();

  const updateUserData = async () => {
    if (formUserInfo.displayName) {
      await currentUser.updateProfile({
        displayName: formUserInfo.displayName,
      });
    }
    if (formUserInfo.photoURL) {
      await currentUser.updateProfile({
        photoURL: formUserInfo.photoURL,
      });
    }
    if (formUserInfo.email) {
      await currentUser.updateEmail(formUserInfo.email);
    }
    // updating my state after the user changes his name or email
    dispatch(userLoggedInAction(currentUser));
    setFormUserInfo({
      displayName: '',
      email: '',
      photoURL: '',
    });
    setAlert({
      message: 'Profile updated successfully',
      status: 'success',
    });
  };
  // All the data that is coming from the userData redux state is checked incase it's null
  // Because when the component render userData default value starts as null which caused an error if I try and use userData.photoUrl
  return (
    <Container className="mt-3">
      <Col md="12">
        <Row className="profileImageRow">
          <Image
            onClick={updateUserData}
            style={{ width: '12.5rem' }}
            src={userData && userData.photoURL ? userData.photoURL : ANONYMOUS_PHOTO_URL}
            alt="profileImage"
            roundedCircle
          />

          <Button className="mt-3" onClick={() => setShowModal(true)}>
            Edit Profile
          </Button>

          {alert && (
            <Alert
              className="mt-3"
              variant={alert.status}
              onClose={() => setAlert(null)}
              dismissible
            >
              <p>{alert.message}</p>
            </Alert>
          )}
        </Row>

        <div className="profileDetailRow">
          <Row>
            <Col>
              <h5>{t('profile.fullName')}</h5>
            </Col>
            <Col>{userData && userData.displayName}</Col>
          </Row>
          <Row>
            <Col>
              <h5>{t('profile.email')}</h5>
            </Col>
            <Col> {userData && userData.email}</Col>
          </Row>
          <Row>
            <Col>
              <h5>{t('profile.verified')}</h5>
            </Col>
            <Col>
              {userData && userData.emailVerified ? 'Email verified!' : 'Email is not verified'}
            </Col>
          </Row>
        </div>
      </Col>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Change Profile Info </Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateUserData();
            setShowModal(false);
          }}
        >
          <Modal.Body>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Name"
                value={formUserInfo.displayName}
                onChange={(e) => setFormUserInfo({ ...formUserInfo, displayName: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={formUserInfo.email}
                onChange={(e) => setFormUserInfo({ ...formUserInfo, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Photo URL"
                value={formUserInfo.photoURL}
                onChange={(e) => setFormUserInfo({ ...formUserInfo, photoURL: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
