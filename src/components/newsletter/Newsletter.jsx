import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Container>
        <Row>
          <Col className="newsletterTitle">
            <p>{t('home.newsletter.titles.title0')}</p> <br />
            <p>{t('home.newsletter.titles.title1')}</p>
          </Col>
        </Row>

        <Row>
          <Col className="newsletterInput">
            <form>
              <div className="col-lg-10 mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="newsletterInputBar"
                    placeholder={t('home.newsletter.input.text')}
                    required
                  ></input>
                  <div className="newsletterButtonDiv">
                    <input
                      type="submit"
                      value={t('home.newsletter.input.button')}
                      className="btn btn-primary btn-sm rounded-0"
                      id="newsletterButton"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
