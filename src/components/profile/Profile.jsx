import React, { useState } from 'react';
import './Profile.css';
import { Container, Col, Row, Image, Modal, Button, Form, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedInAction } from '../../redux/action';
import { auth } from '../../firebase';

const ANONYMOUS_PHOTO_URL =
  'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg';

export default function Profile() {
  const currentUser = auth.currentUser;
  const [alert, setAlert] = useState(null);
  const [formUserInfo, setFormUserInfo] = useState({
    displayName: '',
    email: '',
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
    if (formUserInfo.email) {
      await currentUser.updateEmail(formUserInfo.email);
    }
    dispatch(userLoggedInAction(currentUser));
    setFormUserInfo({
      displayName: '',
      email: '',
    });
    setAlert({
      message: 'Profile updated successfully',
      status: 'success',
    });
  };
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
              {userData && userData.emailVerified ? 'Email verified!' : 'Email is not verified'}{' '}
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
                placeholder="name"
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
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit Changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
