import { Button, Col, Modal, Row, Space } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputCustom from '../../../components/InputCustom';
import { postRegisterUser } from '../../../shared/services/http-client';
import './RegisterAccount.css';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import { validateEmail, validatePassword } from '../../../shared/constants';

export default function RegisterPage() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(1);
  const [confirmed, setConfirmed] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();


  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
    if (validateEmail(email)) {
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false);
    }
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    if (validatePassword(password)) {
      setIsValidPassword(true)
    } else {
      setIsValidPassword(false);
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await postRegisterUser(username, email, password, confirmed, role, fullName, address, phoneNumber);
      if (response.jwt) {
        toast.success('Create new user successfully', { autoClose: 1500, position: 'top-right' });
      }
      setTimeout(() => {
        navigate('../login');
      }, 2000);
    } catch (error) {
      toast.error('Invalid information, plaese try again', { autoClose: 1500, position: 'top-right' });
      console.log(error.details);
    }
  };

  return (
    <>
      <ToastContainer />
      <Row className="register-page">
        <Col xs={24} sm={16} lg={8} className="register-form-container">
          <Space direction="vertical" style={{ width: '100%' }} size={'middle'}>
            <InputCustom
              name="email"
              type="text"
              placeholderStr={'Your email'}
              id="emailInp"
              editType={true}
              onChange={e => handleOnChangeEmail(e)}
            />
            {!isValidEmail && <p style={{ color: 'red' }}>Email invalid</p>}
            <InputCustom
              name="username"
              type="text"
              placeholderStr={'Username'}
              id="usernameInp"
              editType={true}
              onChange={e => setUsername(e.target.value)}
            />
            <InputCustom
              name="fullname"
              type="text"
              placeholderStr={'Fullname'}
              id="fullnameInp"
              editType={true}
              onChange={e => setFullName(e.target.value)}
            />
            <InputCustom
              name="password"
              type="password"
              placeholderStr={'Password'}
              id="passwordInp"
              editType={true}
              onChange={e => handleOnChangePassword(e)}
            />
            {!isValidPassword && <p style={{ color: 'red' }}>Password invalid</p>}
            <InputCustom
              name="phonenumber"
              type="text"
              placeholderStr={'Phone number'}
              id="phonenumberInp"
              editType={true}
              onChange={e => setPhoneNumber(e.target.value)}
            />
            <InputCustom
              name="address"
              type="text"
              placeholderStr={'Address'}
              id="addressInp"
              editType={true}
              onChange={e => setAddress(e.target.value)}
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

            <Link
              to="/login"
              className="link-register"
              onClick={e => {
                console.log('Hello world');
              }}
            >
              or log in to your account
            </Link>
          </Space>
        </Col>
      </Row>
    </>
  );
}
