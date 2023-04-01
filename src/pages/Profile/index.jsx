import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Tabs } from 'antd';
import EditProfile from './components/EditProfile';
import './style.scss';

Profile.propTypes = {};

function Profile(props) {
  const items = [
    {
      key: '1',
      label: `My profile`,
      children: <EditProfile className="update__profile" />,
    },
    {
      key: '2',
      label: `Change password`,
      children: `Content of Tab Pane 2`,
    },
  ];
  return (
    <Row>
      <Col xs={24} className="update__page">
        <Tabs defaultActiveKey="1" items={items} />
      </Col>
    </Row>
  );
}

export default Profile;
