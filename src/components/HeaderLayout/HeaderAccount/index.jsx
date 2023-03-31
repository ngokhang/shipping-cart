import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Dropdown, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.scss';

HeaderAccount.propTypes = {};

function HeaderAccount(props) {
  const [isLogin, setIsLogin] = useState(true);

  const [items, setItems] = useState([
    {
      key: '1',
      label: (
        <a target="_blank" href="#">
          My profile
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" href="#" onClick={e => logOutAccount(e)}>
          Logout
        </a>
      ),
    },
  ]);
  const logOutAccount = e => {
    e.preventDefault();
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <Row>
      <Col>
        {isLogin ? (
          <Dropdown menu={{ items }} placement="bottom">
            <a href="#" style={{ color: 'black' }}>
              <UserOutlined className="user-img" />
            </a>
          </Dropdown>
        ) : (
          <a
            href="#"
            style={{ color: 'black' }}
            onClick={e => e.preventDefault()}
          >
            <UserOutlined className="user-img" />
          </a>
        )}
      </Col>
    </Row>
  );
}

export default HeaderAccount;
