import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiApple,
  SiKalilinux,
  SiUbuntu
} from "react-icons/si";

export const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <section className='techstackHeader'><h2>Operating Systems</h2></section>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
    </Row>
  );
};
