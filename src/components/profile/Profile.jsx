import React, { useEffect } from 'react';
import './Profile.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import deleteThis from '../../images/stupidGuy.png';
import { useSelector } from 'react-redux';
import { auth } from "../../firebase";

export default function Profile() {
  // const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUserDataReducer)
  console.log(userData)
  const { t } = useTranslation();

  const updateUserData = async () => {
    console.log(auth.currentUser)
    const response = await auth.currentUser.updateProfile({
      displayName: "Jennet Hydyrova",
      birthday: "20-20-2019"
    })
    console.log(response)
  }

  return (
    <Container>
      <Col md="12">
        <Row className="profileImageRow">
          <Image onClick={updateUserData} src={deleteThis} alt="profileImage" roundedCircle />
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
              <h5>{t('profile.birthday')}</h5>
            </Col>
            <Col>31-13-1901</Col>
          </Row>
          <Row>
            <Col>
              <h5>{t('profile.phone')}</h5>
            </Col>
            <Col>+811234567 </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
}
