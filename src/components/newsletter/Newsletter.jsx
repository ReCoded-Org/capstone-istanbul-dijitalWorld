import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Container>
        <Row data-testid="newsletterTitle">
          <Col className="newsletterTitle">
            <p>{t('home.newsletter.titles.title0')}</p> <br />
            <p>{t('home.newsletter.titles.title1')}</p>
          </Col>
        </Row>

        <Row data-testid="newsletterInput">
          <Col className="newsletterInput">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control newsletterBar"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              ></input>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary newsletterButton" type="button">
                  Button
                </button>
              </div>
            </div>
            {/* <input
              className="newsletterBar"
              placeholder={t("home.newsletter.input.text")}
            ></input>
            <button className="newsletterButton">
              {t("home.newsletter.input.button")}
            </button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
