import React, { useContext } from 'react';
import { AccountIcon } from './style';
import { Dropdown } from 'antd';
import { Context } from '../../../store/Context';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function HeaderAccount(props) {
  const loginState = useContext(Context);
  const navigate = useNavigate();
  const logOutAccount = e => {
    e.preventDefault();
    localStorage.clear();
    loginState.setIsLogin(false);
    navigate('/');
  };
  const items = [
    {
      key: '1',
      label: <Link to="/me">My profile</Link>,
    },
    {
      key: '2',
      label: (
        <a target="_blank" href="#" onClick={e => logOutAccount(e)}>
          Logout
        </a>
      ),
    },
  ];
  const items_2 = [
    {
      key: '1',
      label: <Link to="/login">Log in</Link>,
    },
    {
      key: '2',
      label: <Link to="/register">Register</Link>,
    },
  ];
  return (
    <>
      <Dropdown
        menu={{ items: loginState.isLogin ? items : items_2 }}
        placement="bottom"
      >
        <a href="#" style={{ display: 'flex', color: 'black' }}>
          <AccountIcon className="user-img" />
        </a>
      </Dropdown>
    </>
  );
}

export default HeaderAccount;
