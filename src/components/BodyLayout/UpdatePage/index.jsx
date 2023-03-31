import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import './style.scss';
import UpdateProfileForm from './UpdateProfileForm';
import NavigationUpdateForm from './NavigationUpdateForm';

UpdatePage.propTypes = {};

function UpdatePage(props) {
  const navEdit = [
    {
      key: '1',
      label: `My profile`,
    },
    {
      key: '2',
      label: `Change password`,
      // children: `Content of Tab Pane 2`,
    },
  ];
  return (
    <Row>
      <Col xs={24} className="navigation-forms">
        <NavigationUpdateForm navEdit={navEdit} />
      </Col>
      <Col xs={24} className="profile-form">
        <UpdateProfileForm />
      </Col>
    </Row>
  );
}

export default UpdatePage;
