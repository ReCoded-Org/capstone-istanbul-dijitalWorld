import React, { useState } from 'react';
import './Profile.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import deleteThis from '../../images/stupidGuy.png';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedInAction } from '../../redux/action';
import { auth } from "../../firebase";

export default function Profile() {
  const [formUserInfo, setUserInfo] = useState({
    displayName: "",
    phoneNumber: "",

  })
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUserDataReducer)
  console.log(userData)
  const { t } = useTranslation();

  const updateUserData = async () => {
    console.log(auth.currentUser)
    const response = await auth.currentUser.updateProfile({
      displayName: "omegaaaaalul",
      birthday: "20-20-2019"
    })
    dispatch(userLoggedInAction(auth.currentUser));

  }

  return (
    <Container className="mt-3">
      <Col md="12">
        <Row className="profileImageRow">
          <Image onClick={updateUserData} style={{ width: "200px" }} src={userData && userData.photoURL} alt="profileImage" />
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
              <h5>{t('profile.phone')}</h5>
            </Col>
            <Col>{userData && (userData.phoneNumber ? userData.phoneNumber : "No phone number saved")} </Col>
          </Row>
          <Row>
            <Col>
              <h5>{t('profile.verified')}</h5>
            </Col>
            <Col>{userData && userData.emailVerified ? "Email verified!" : "Email is not verified"} </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
}
