import React, { useContext } from 'react';
import { AccountIcon } from './style';
import { Dropdown } from 'antd';
import { Context } from '../../../store/Context';

function HeaderAccount(props) {
  const loginState = useContext(Context);
  const logOutAccount = e => {
    e.preventDefault();
    localStorage.clear();
    loginState.setIsLogin(false);
  };
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" href="#">
          My profile
        </a>
      ),
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
      label: (
        <a target="_blank" href="#">
          Log in
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" href="#" onClick={e => logOutAccount(e)}>
          Register
        </a>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items: loginState.isLogin ? items : items_2 }}
      placement="bottom"
    >
      <a href="#" style={{ color: 'black' }}>
        <AccountIcon className="user-img" />
      </a>
    </Dropdown>
  );
}

export default HeaderAccount;
