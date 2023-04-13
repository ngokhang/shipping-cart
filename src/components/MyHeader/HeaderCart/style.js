import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import styled from 'styled-components';
import EmptyCard from '../../../assets/images/emptyCart.png';

export const CartSVG = styled(ShoppingCartOutlined)`
  svg {
    color: black;
    width: 20px;
    height: 20px;
  }
`;

export const DrawerCart = styled(Drawer)`
  .ant-drawer-header-title {
    justify-content: flex-end;
    .ant-drawer-close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      padding: 14px;
      background-color: black;
      font-size: 24px;
      color: white;
      border-radius: 50%;
    }
  }
  .ant-drawer-body {
    display: flex;
    justify-content: center;
    align-items: center;
    .cart-empty {
      padding-top: 106px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      .empty-img {
        width: 210px;
        height: 142px;
        padding-bottom: 36px;
        background: url(${EmptyCard}) no-repeat center center;
      }
      .empty-content {
        padding-top: 36px;
        .cart-empty-title {
          font-size: 24px;
          line-height: 38px;
          font-weight: 600;
        }
        .cart-empty-text {
          font-size: 12px;
          line-height: 19px;
          color: #1d1f22;
        }
      }
      .btn-start-shopping {
        height: unset;
        padding: 16px 15px !important;
        border-radius: unset;
        background-color: black;
        color: white;
      }
    }
  }
`;
