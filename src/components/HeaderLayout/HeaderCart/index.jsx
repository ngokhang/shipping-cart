import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import './style.scss';

HeaderCart.propTypes = {};

function HeaderCart(props) {
  return (
    <Row>
      <Col>
        <ShoppingCartOutlined className="card-logo" />
      </Col>
    </Row>
  );
}

export default HeaderCart;
