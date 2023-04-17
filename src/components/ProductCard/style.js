import { Card } from 'antd';
import styled from 'styled-components';

export const MyCard = styled(Card)`
  & .card-image {
    position: relative;

    &:hover .cart-icon {
      display: inline-block;
    }
  }

  .cart-body {
    padding: 16px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .cart-icon {
    display: none;
    position: absolute;
    right: 12px;
    bottom: -25px;
    padding: 10px 10px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;

    svg {
      display: inline-block;
      width: 30px;
      height: 30px;
      color: white;
    }
  }
`;
