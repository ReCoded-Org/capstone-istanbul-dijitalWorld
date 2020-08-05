import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
//import { useTranslation } from 'react-i18next';
import data from './testdata.json';

export default function Body(props) {
  const [activeID, setActiveID] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundImage: `url(${props.data[0].img})`,
  });
  const [panelStyle, setPanelStyle] = useState({ backgroundColor: props.data[0].color });
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonStyle, setButtonStyle] = useState('#ffffff');

  const changeActive = async (id) => {
    setActiveID(id),
      setWrapperStyle(`url('${props.data[id].img}')`),
      setPanelStyle(props.data[id].color);
  };

  const buttonColor = async () => {
    if (!buttonHover) {
      setButtonHover(true), setButtonStyle({ color: props.data[activeID].color });
    } else {
      setButtonHover(false), setButtonStyle('#ffffff');
    }
  };

  return (
    <section>
      <Selectors data={props.data} activeID={props.activeID} changeActive={changeActive} />
      <Panel
        data={props.data[activeID]}
        panelStyle={panelStyle}
        buttonStyle={buttonStyle}
        buttonColor={buttonColor}
      />
    </section>
  );
}

function Panel() {
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

function Selectors() {
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

function Selector() {
  const componentClass = 'selector';
  if (activeID === id) {
    componentClass = 'selector active';
  }

  return <div className={componentClass} onClick={handleClick}></div>;
}
