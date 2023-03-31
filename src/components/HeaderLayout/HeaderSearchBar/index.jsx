import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import InputCustom from '../../Common/InputCustom';
import './style.scss';
import { Input } from 'antd';

const { Search } = Input;

HeaderSearchBar.propTypes = {};

function HeaderSearchBar(props) {
  const handleOnChange = e => {
    console.log(e.target.value);
  };
  const onSearch = value => console.log(value);
  return (
    <Row className="header__search">
      <Col xs={24}>
        <InputCustom
          placeholderStr={'Search products'}
          onChange={handleOnChange}
        />
      </Col>
    </Row>
  );
}

export default HeaderSearchBar;
