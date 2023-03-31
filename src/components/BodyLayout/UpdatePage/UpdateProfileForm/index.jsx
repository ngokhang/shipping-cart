import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputCustom from '../../../Common/InputCustom';
import { Button, Col, Row } from 'antd';
import './style.scss';
import axios from 'axios';
import NotifyModal from '../../../Common/NotifyModal';

UpdateProfileForm.propTypes = {};

function UpdateProfileForm(props) {
  const API_URL = `https://edison-shipping-api.savvycom.xyz/api`;
  const [userData, setUserData] = useState({});
  localStorage.setItem('token', '');

  useEffect(() => {
    async function fetchDataUser() {
      await axios.get(`${API_URL}/users/me`, config).then(response => {
        const obj = {
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          address: response.data.address,
          fullname: response.data.fullname,
        };
        setUserData(obj);
      });
    }
    fetchDataUser();
  }, []);

  let config = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjgwMjY3NjMyLCJleHAiOjE2ODI4NTk2MzJ9.AK5cZ-xT6qdcX2uUVGzUAvsRyqcR78bIG1u1IZLj8As',
    },
  };
  const handleOnClickUpdate = async e => {
    e.preventDefault();
    await axios
      .put(`${API_URL}/users/${userData.id}`, userData, config)
      .then(response => console.log(response));
  };

  const handleOnChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(userData);
  };
  return (
    <>
      <Row gutter={[0, 0]} style={{ width: '638px' }}>
        <Col xs={24}>
          <Row gutter={[32, 0]}>
            <Col xs={24} sm={12}>
              <InputCustom
                editType={true}
                placeholderStr={'Full name'}
                name={'fullname'}
                onChange={handleOnChange}
                id="fullNameInp"
              />
              <InputCustom
                editType={true}
                placeholderStr={'Your email'}
                name={'email'}
                onChange={handleOnChange}
                id="emailInp"
              />
            </Col>
            <Col xs={24} sm={12}>
              <InputCustom
                editType={true}
                placeholderStr={'Username'}
                name={'username'}
                onChange={handleOnChange}
                id="usernameInp"
              />
              <InputCustom
                editType={true}
                placeholderStr={'Phone number'}
                name={'phoneNumber'}
                onChange={handleOnChange}
                id="phoneNumInp"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <InputCustom
            editType={true}
            placeholderStr={'Address'}
            name={'address'}
            onChange={handleOnChange}
            id="addressInp"
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={6}
          style={{ marginTop: '12px', height: '52px' }}
        >
          {/* <Button
            size="large"
            shape="default"
            block
            className="btn btn-update"
            onClick={e => handleOnClickUpdate(e)}
          >
            Update
          </Button> */}
          <NotifyModal
            handleOnClickUpdate={handleOnClickUpdate}
            title="Are you sure about that ?"
          />
        </Col>
      </Row>
    </>
  );
}

export default UpdateProfileForm;
