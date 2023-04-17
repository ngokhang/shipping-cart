import { Col, Row } from 'antd';
import React from 'react';
import Hero from './components/Hero';
import SliderProduct from './components/SliderProduct';
import { Outlet } from 'react-router-dom';

function Homepage(props) {
  return (
    <Row className="container" style={{ paddingTop: '1.5rem' }}>
      <Col xs={24}>
        <Hero />
      </Col>
      <Col xs={24} style={{ paddingTop: '73px', paddingBottom: '16px' }}>
        <SliderProduct title={'Clothes'} />
      </Col>
      <Col xs={24} style={{ paddingTop: '73px', paddingBottom: '16px' }}>
        <SliderProduct title={'Sport shoes'} />
      </Col>
    </Row>
  );
}

export default Homepage;
