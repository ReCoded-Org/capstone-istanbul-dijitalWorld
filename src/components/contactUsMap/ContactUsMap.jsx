import React from 'react';
import { Col } from 'react-bootstrap';

export default function ContactUsMap() {
  return (
    <Col md="5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.85229192479!2d28.97633693668368!3d41.037001418764085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIFNxdWFyZSwgR8O8bcO8xZ9zdXl1LCAzNDQzNSBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1596395494248!5m2!1sen!2str"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="map"
      ></iframe>
    </Col>
  );
}
