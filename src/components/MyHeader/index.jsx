import MenuItem from 'antd/es/menu/MenuItem';
import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderAccount from './HeaderAccount';
import HeaderCart from './HeaderCart';
import { HeaderContainer, HeaderMenu } from './style';
import { Button, Drawer, Row, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

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
          <MenuItem>
            <HeaderLogo />
          </MenuItem>
          {navList.map((item, index) => (
            <MenuItem key={index}>
              <a href="#">{item.toUpperCase()}</a>
            </MenuItem>
          ))}
        </HeaderMenu>
        <div className="header-actions">
          <Space size={'middle'}>
            <HeaderSearch />
            <HeaderAccount />
            <HeaderCart />
          </Space>
        </div>
      </HeaderContainer>

      <HeaderContainer className="sm">
        <HeaderMenu mode="horizontal">
          <MenuItem>
            <HeaderLogo />
          </MenuItem>
          <div className="drawer">
            <Button
              type="primary"
              onClick={showDrawer}
              icon={<MenuOutlined />}
            />
            <Drawer
              size="default"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <HeaderMenu mode="vertical" className="menu">
                {navList.map((item, index) => (
                  <MenuItem key={index}>
                    <a href="#">{item.toUpperCase()}</a>
                  </MenuItem>
                ))}
              </HeaderMenu>
            </Drawer>
          </div>
        </HeaderMenu>
      </HeaderContainer>
    </>
  );
}

export default MyHeader;
