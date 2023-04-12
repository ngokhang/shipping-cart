import { Input } from 'antd';
import styled from 'styled-components';

export const SearchBar = styled(Input)`
  border: 0;

  box-shadow: none !important;
  outline: none !important;
  border-color: unset !important;
  border-bottom: 1px solid black !important;
  border-radius: unset;
  padding: 8px 0;
  cursor: default;
  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 320px;
  }
`;
