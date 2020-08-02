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
                <h2 className="panel-header">{t("resourcePage.title")}</h2>
                <h2 className="resourceTitle">{t("resourcePage.resource.resourceAddress")}</h2>
                <p className="panel-info">{t("resourcePage.resource.resourceBlurp")}</p>
                <Button className="panel-button">{t("resourcePage.resource.button")}</Button>
            </aside>
        </Col>

        <Col className="imageCol">
        </Col>
    </Row>
  );
}
