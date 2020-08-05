import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import './Resources.css';
import girlsGlobe from "./img/Girlsglobal.png"
import malala from "./img/Malala.png"
import girlTalk from "./img/GirltalkHQ.png"

function ControlledCarousel() {
    return (
      <Container>
        <Carousel className="resourceCarousel slide vertical">
          {/* <Card md={6} >
            dffgh
          </Card> */}

          <Carousel.Item md={6} >
            <Card>
              <img
              className="d-block w-100"
              src={girlsGlobe}
              alt="girlsglobe.org"
              />
              {/* <Carousel.Caption> */}
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              {/* </Carousel.Caption>    */}
            </Card>     
          </Carousel.Item>
        
          <Carousel.Item>
              <img
              className="d-block w-100"
              src={malala}
              alt="malala.org"
              />        
          </Carousel.Item>

          <Carousel.Item>
              <img
              className="d-block w-100"
              src={girlTalk}
              alt="girltalkhq.com"
              />        
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
  
  export default ControlledCarousel;