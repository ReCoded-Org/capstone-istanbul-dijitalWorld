import React, { useState } from 'react';
import './Profile.css';
import { Container, Col, Row, Image, Modal, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedInAction } from '../../redux/action';
import { auth } from '../../firebase';

const ANONYMOUS_PHOTO_URL =
  'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg';

export default function Profile() {
  const [formUserInfo, setUserInfo] = useState({
    displayName: '',
    email: ""
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUserDataReducer);
  console.log(userData);
  const { t } = useTranslation();

  const updateUserData = async () => {
    const currentUser = auth.currentUser;
    await currentUser.updateProfile({
      displayName: formUserInfo.displayName,
    })
    await currentUser.updateEmail(formUserInfo.email).then((good) => console.log("hello"))
    dispatch(userLoggedInAction(auth.currentUser));
    setUserInfo({
      displayName: "",
      email: ""
    })
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
        </Row>
        <Row className="profileImageRow mt-3">
          <Button style={{ justifyContent: 'center' }} onClick={() => setShowModal(true)}>
            Edit Profile
          </Button>
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
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Change Profile Info </Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateUserData();
          }}
        >
          <Modal.Body>
            <Form.Group controlId="formBasicName">
              <Form.Control placeholder="Name" value={formUserInfo.displayName} onChange={(e) => setUserInfo({ ...setUserInfo, displayName: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formBasicNumber">
              <Form.Control placeholder="Email" value={formUserInfo.email} onChange={(e) => setUserInfo({ ...setUserInfo, email: e.target.value })} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={() => setShowModal(false)}>
              Submit Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
