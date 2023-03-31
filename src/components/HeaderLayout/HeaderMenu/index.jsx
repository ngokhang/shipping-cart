import React from 'react';
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';

HeaderMenu.propTypes = {};

function HeaderMenu(props) {
  const items = ['home', 'clothes', 'sport shoes'];
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ width: '100%' }}
    >
      {items.map((item, index) => (
        <Menu.Item key={index} onClick={() => console.log(item)}>
          {item.toUpperCase()}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default HeaderMenu;
