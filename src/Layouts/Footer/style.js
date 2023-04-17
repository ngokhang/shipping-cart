import { Footer } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const MyFooter = styled(Footer)`
  background-color: black;
  color: white;
  padding-top: 5rem;
  .ant-row {
    display: flex;
    justify-content: space-evenly;
  }
  .ant-col {
    max-width: 240px;
  }
  .list-footer {
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 17px;
    > li {
      > a {
        display: inline-block;
        color: white;
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
`;
