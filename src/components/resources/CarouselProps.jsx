import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
//import { useTranslation } from 'react-i18next';
import data from './testdata.json';

export default function body() {
  
}

export default function Panel() {
  //const { t } = useTranslation();
  //const [resourceBlurb, setResourceBlurb] = useState();
  return (
    // <Row className="resourceRow">
    // <Col className="blurpCol">
    <aside className="panel" style={panelStyle}>
      <h2 className="panel-header">{data.header}</h2>
      <h2 className="resourceTitle">{data.header}</h2>
      <p className="panel-info">{data.body}</p>
      <Button
        className="panel-button"
        style={buttonStyle}
        onMouseEnter={buttonColor}
        onMouseLeave={buttonColor}
      >
        Button
      </Button>
    </aside>
    // </Col>
    // </Row>
  );
}

export default function Selectors() {
  const handleClick = (e) => {
    if (id !== activeID) {
      changeActive(id);
    } else {
      return;
    }
  };

  return (
    <div className="selectors">
      {data.map((item) => (
        <Selector
          key={item.id}
          id={item.id}
          handleClick={handleClick}
          changeActive={changeActive}
          activeID={activeID}
        />
      ))}
    </div>
  );
}

export default function Selector() {
  const componentClass = 'selector';
  if (activeID === id) {
    componentClass = 'selector active';
  }

  return <div className={componentClass} onClick={handleClick}></div>;
}
