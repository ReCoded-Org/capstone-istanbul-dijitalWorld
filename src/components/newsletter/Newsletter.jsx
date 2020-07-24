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
            {/* This is Elif's suggestion */}
            <form>
              <div className="col-lg-10 mb-3 inputGroup">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded-4 validationDefaultUsername newsletterBar"
                    placeholder={t('home.newsletter.input.text')}
                    aria-describedby="inputGroupPrepend2"
                    required
                  ></input>
                  <div class="input-group-prepend">
                    <input
                      type="submit"
                      value={t('home.newsletter.input.button')}
                      className="btn btn-primary btn-sm rounded-0 inputGroupPrepend2 newsletterButton"
                    ></input>
                  </div>
                </div>
              </div>
            </form>

            {/* This is the first one with the margin */}
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
