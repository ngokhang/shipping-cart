import { Col, Modal, Row } from 'antd';
import React, { useContext, useEffect } from 'react';
import Hero from './components/Hero';
import SliderProduct from './components/SliderProduct';
import { Outlet } from 'react-router-dom';
import { Context } from '../../store/Context';
import './style.scss';

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
