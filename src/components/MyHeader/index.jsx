import MenuItem from 'antd/es/menu/MenuItem';
import React, { useState } from 'react';
import HeaderAccount from './HeaderAccount';
import HeaderCart from './HeaderCart';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import { HeaderContainer, HeaderMenu } from './style';

function MyHeader(props) {
  const navList = ['home', 'clothes', 'sport shoes'];
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HeaderContainer className="md">
        <HeaderMenu mode="horizontal">
          <MenuItem className="no-bd">
            <HeaderLogo />
          </MenuItem>
          {navList.map((item, index) => (
            <MenuItem key={index}>
              <a href="#">{item.toUpperCase()}</a>
            </MenuItem>
          ))}
        </HeaderMenu>
        <HeaderMenu mode="horizontal" className="header-actions">
          <MenuItem className="no-bd">
            <HeaderSearch />
          </MenuItem>
          <MenuItem className="no-bd">
            <HeaderAccount />
          </MenuItem>
          <MenuItem className="no-bd">
            <HeaderCart />
          </MenuItem>
        </HeaderMenu>
      </HeaderContainer>
    </>
  );
}

export default MyHeader;
