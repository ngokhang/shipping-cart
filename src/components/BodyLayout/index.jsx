import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import UpdatePage from './UpdatePage';
import NavigationUpdateForm from './UpdatePage/NavigationUpdateForm';
import './style.scss';

BodyLayout.propTypes = {};

function BodyLayout(props) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Row>
      {isLogin && (
        <Col xs={24} className="content">
          <UpdatePage />
        </Col>
      )}
    </Row>
  );
}

export default BodyLayout;
