import React from 'react';
import { useState } from 'react';
import './RegisterAccount.css';
import axiosInstance from '../../../shared/services/http-client';
import { Button, Col, Row, Space, Modal } from 'antd';
import InputCustom from '../../../components/InputCustom';
import './RegisterAccount.css';
import './style.scss';

const initFormValue = {
  email: '',
  username: '',
  fullname: '',
  password: '',
  phoneNumber: '',
  address: '',
};

const isEmptyValue = value => {
  return !value || value.trim().length < 1;
};

const isEmailValid = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export default function RegisterPage() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.email)) {
      error['email'] = 'Email is required!';
    } else {
      if (!isEmailValid(formValue.email)) {
        error['email'] = 'Email is invalid!';
      }
    }
    if (isEmptyValue(formValue.username)) {
      error['username'] = 'User name is required!';
    }
    if (isEmptyValue(formValue.fullname)) {
      error['fullname'] = 'Full name is required!';
    }
    if (isEmptyValue(formValue.password)) {
      error['password'] = 'Password is required!';
    }
    if (isEmptyValue(formValue.phoneNumber)) {
      error['phoneNumber'] = 'Phone number is required!';
    }
    if (isEmptyValue(formValue.address)) {
      error['address'] = 'Address is required!';
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = event => {
    const { value, name } = event.target;
    console.log(value, name);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axiosInstance.post('auth/local/register', {
          ...formValue,
          confirmed: true,
          role: 1,
        });
        console.log('Server response', response.data);
        countDownSuccess();
      } catch (error) {
        console.error('Error sending form data to server', error);
      }
    } else {
      countDownError();
      console.log('Form invalid!');
    }
  };

  const [modal, contextHolder] = Modal.useModal();
  const countDownSuccess = () => {
    let secondsToGo = 1;
    const instance = modal.success({
      title: 'Notification',
      content: `Register successfully`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `Register successfully`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  const countDownError = () => {
    let secondsToGo = 1;
    const instance = modal.error({
      title: 'Notification',
      content: `Register failed`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `Register failed`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <Row className="register-page">
      <Col xs={16} lg={8} className="register-form-container">
        <Space direction="vertical" style={{ width: '100%' }} size={'middle'}>
          <InputCustom
            name="email"
            type="text"
            placeholderStr={'Your email'}
            id="emailInp"
            editType={true}
            onChange={e => handleChange(e)}
          />
          <InputCustom
            name="username"
            type="text"
            placeholderStr={'Username'}
            id="usernameInp"
            editType={true}
            onChange={e => handleChange(e)}
          />
          <InputCustom
            name="fullname"
            type="text"
            placeholderStr={'Fullname'}
            id="fullnameInp"
            editType={true}
            onChange={e => handleChange(e)}
          />
          <InputCustom
            name="password"
            type="password"
            placeholderStr={'Password'}
            id="passwordInp"
            editType={true}
            onChange={e => handleChange(e)}
          />
          <InputCustom
            name="phonenumber"
            type="text"
            placeholderStr={'Phone number'}
            id="phonenumberInp"
            editType={true}
            onChange={e => handleChange(e)}
          />
          <InputCustom
            name="address"
            type="text"
            placeholderStr={'Address'}
            id="addressInp"
            editType={true}
            onChange={e => handleChange(e)}
          />
          <Button
            block
            className="btn btn-register"
            onClick={e => {
              handleSubmit(e);
            }}
          >
            <span className="btn-title">create account</span>
          </Button>

          <a
            href="/register"
            className="link-register"
            onClick={e => {
              console.log('Hello world');
            }}
          >
            or log in to your account
          </a>
        </Space>
      </Col>
      {contextHolder}
    </Row>
  );
}
