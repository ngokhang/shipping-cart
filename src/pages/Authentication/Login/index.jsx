import { Button, Checkbox, Col, Input, Modal, Row, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import InputCustom from '../../../components/InputCustom';
import Title from 'antd/es/typography/Title';
import axiosInstance from '../../../shared/services/http-client';
import { Context } from '../../../store/Context';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const loginContext = useContext(Context);

  const [modal, contextHolder] = Modal.useModal();
  const countDownSuccess = () => {
    let secondsToGo = 1;
    const instance = modal.success({
      title: 'Notification',
      content: `Login successfully`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `Login successfully`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  const onChangeUsernameInput = e => {
    setUsername(e.target.value);
    setIsTyping(true);
  };

  const onChangePasswordInput = e => {
    setPassword(e.target.value);
    setIsTyping(true);
  };

  const handleLogin = async () => {
    const result = await axiosInstance.post('auth/local', {
      identifier: username,
      password: password,
    });
    const { jwt } = result;
    if (jwt.length !== 0) {
      countDownSuccess();
      localStorage.setItem('at', jwt);
      loginContext.setIsLogin(true);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      setIsTyping(false);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [username, password]);

  return (
    <Row className="login-page">
      <Col xs={16} lg={6}>
        <Space className="login-form" direction="vertical" size={'large'}>
          <InputCustom
            placeholderStr={'Your email'}
            editType={true}
            name="loginEmail"
            id="loginEmail"
            type="text"
            onChange={e => onChangeUsernameInput(e)}
          />
          <InputCustom
            placeholderStr={'Password'}
            editType={true}
            name="loginEmail"
            id="loginEmail"
            type="password"
            onChange={e => onChangePasswordInput(e)}
          />
          <Checkbox className="btn-remember">Remember me</Checkbox>
          <Button block className="btn btn-login" onClick={handleLogin}>
            <span>Login</span>
          </Button>
          <Title level={4} style={{ textAlign: 'center' }}>
            Don't have account yet?
          </Title>
          <a className="link-register">Resgister now</a>
        </Space>
      </Col>
      {contextHolder}
    </Row>
  );
}

export default Login;
