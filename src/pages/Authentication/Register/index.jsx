import { Button, Col, Modal, Row, Space } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputCustom from '../../../components/InputCustom';
import { postRegisterUser } from '../../../shared/services/http-client';
import './RegisterAccount.css';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(1);
  const [confirmed, setConfirmed] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await postRegisterUser(username, email, password, confirmed, role, fullName, address, phoneNumber);
    console.log(response);
    if (response.jwt) {
      toast.success('Create new user successfully', { autoClose: 1500, position: 'top-right' })
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
              onChange={e => setEmail(e.target.value)}
            />
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
              onChange={e => setPassword(e.target.value)}
            />
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
