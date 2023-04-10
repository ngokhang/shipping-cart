import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { SearchBar } from './style';

function HeaderSearch(props) {
  return (
    <SearchBar placeholder="Search products" suffix={<SearchOutlined />} />
  );
}

export default HeaderSearch;
