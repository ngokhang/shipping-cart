import { Drawer, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const HeaderContainer = styled(Header)`
  width: 100%;
  display: flex;
  background-color: white;
  .header-actions {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 320px) {
    padding: 0px 20px !important;
  }
`;

export const HeaderMenu = styled(Menu)`
  width: 100%;
  display: flex;
  border-bottom: unset !important;
  border-right: unset !important;
  .ant-menu-item {
    color: black !important;
    &.no-bd {
      border-bottom: unset !important;
      justify-self: end;
      cursor: default;
      &:hover {
        border-bottom: unset !important;
      }
      &::after {
        display: none !important;
      }
    }
    &:hover {
      &::after {
        border-bottom: 1px solid black !important;
      }
    }
    &-selected {
      &::after {
        border-bottom: 1px solid black !important;
      }
    }
  }
`;

export const DrawerMenuTop = styled(Drawer)`
  .header__menu-account {
    background-color: white;
    border-right: unset !important;
    .ant-menu-submenu-active {
      background-color: white !important;
      .ant-menu-sub {
        background-color: white !important;
      }
    }
  }
`;
