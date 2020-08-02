import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Panel() {
  const { t } = useTranslation();
  const [resourceBlurb, setResourceBlurb] = useState();
  return (
    <Row className="resourceRow">
        <Col className="blurpCol">
            <aside className="panel">
                <h2 className="panel-header"></h2>
                <p className="panel-info"> </p>
                <Button className="panel-button">visit blabla</Button>
            </aside>
        </Col>

        <Col className="imageCol">
        </Col>
    </Row>
  );
}
