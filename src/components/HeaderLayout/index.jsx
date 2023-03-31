import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';
import HeaderAccount from './HeaderAccount';
import './style.scss';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderCart from './HeaderCart';

HeaderLayout.propTypes = {};

function HeaderLayout(props) {
  return (
    <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Col className="left" xs={12}>
        <Row className="header__content">
          <Col xs={2} className="logo">
            <HeaderLogo />
          </Col>
          <Col xs={12} className="menu">
            <HeaderMenu />
          </Col>
        </Row>
      </Col>
      <Col className="right" xs={12}>
        <HeaderSearchBar />
        <HeaderAccount />
        <HeaderCart />
      </Col>
    </Row>
  );
}

export default HeaderLayout;
