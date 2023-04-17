import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { MyFooter } from './style';
import { Col, Row } from 'antd';

function FooterLayout(props) {
  return (
    <MyFooter>
      <Row>
        <Col xs={6}>
          <h3>ABOUT US</h3>
          <ul className="about-us list-footer">
            <li>
              <a href="#">Who we are</a>
            </li>
            <li>
              <a href="#">Quality of the details</a>
            </li>
            <li>
              <a href="#">Customer Reviews</a>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <h3>DEPARTMENTS</h3>
          <ul className="about-us list-footer">
            <li>
              <a href="#">Woman fashion</a>
            </li>
            <li>
              <a href="#">Man fashion</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <h3>HELP</h3>
          <ul className="about-us list-footer">
            <li>
              <a href="#">Customer service</a>
            </li>
            <li>
              <a href="#">Size guide</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <h3>PAYMENTS & DELIVERY</h3>
          <ul className="about-us list-footer">
            <li>
              <a href="#">Purchase terms</a>
            </li>
            <li>
              <a href="#">Guarantee</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </Col>
      </Row>
    </MyFooter>
  );
}

export default FooterLayout;
