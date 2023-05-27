import { Col, Row } from 'antd';
import React from 'react';
import Hero from './components/Hero';
import SliderProduct from './components/SliderProduct';
import './style.scss';

function Homepage(props) {
  return (
    <Row className="container" style={{ paddingTop: '1.5rem' }}>
      <Col xs={24}>
        <Hero />
      </Col>
      <Col xs={24} style={{ paddingTop: '73px', paddingBottom: '16px' }}>
        <SliderProduct title={'Clothes'} idProduct={1} isShowTitle={true} />
      </Col>
      <Col xs={24} style={{ paddingTop: '73px', paddingBottom: '16px' }}>
        <SliderProduct title={'Sport shoes'} idProduct={2} isShowTitle={true} />
      </Col>
    </Row>
  );
}

export default Homepage;
