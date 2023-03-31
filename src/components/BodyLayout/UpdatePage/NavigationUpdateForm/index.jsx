import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

NavigationUpdateForm.propTypes = {};

function NavigationUpdateForm(props) {
  const { navEdit } = props;
  return (
    <Tabs items={navEdit} defaultActiveKey="1" className="navigation-forms" />
  );
}

export default NavigationUpdateForm;
