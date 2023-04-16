import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer, Row, Col } from 'antd';
export const RowCart = styled(Row)`
  height: 100%;
  justify-content: space-around;
  .cart-content {
    padding-top: 10px;
    padding-left: 50px;
    justify-content: center;
    text-align: center;
  }
`;

export const ColCart = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .ant-btn {
    height: 52px;
    padding: 16px 0;
    background-color: black;
    color: white;
    width: 100%;
    margin-top: 20px
  }
  .btn-close{
    display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      padding: 14px;
      background-color: black;
      font-size: 24px;
      color: white;
      border-radius: 50%;
      position: absolute;
      right: 0;

  }

  
`;
export const QuantityButton = styled.span`
  display: flex;
  align-items: center;
  
  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #f1f1f1;
    color: #333;
    font-size: 18px;
    
    cursor: pointer;
    outline: none;
  }
  
  span {
    margin: 0 10px;
    font-size: 13px;
    
  }
`;
export const DrawCart = styled(Drawer)`
  
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
    
  
  
  
`;
