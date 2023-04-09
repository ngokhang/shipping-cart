import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { SearchBar } from './style';
import axiosInstance from '../../../shared/services/http-client';

function HeaderSearch(props) {
  const [searchKey, setSearchKey] = useState('');
  const [productsSearch, setProductsSearch] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const handleOnChange = e => {
    setSearchKey(e.target.value);
    setIsTyping(true);
  };
  useEffect(() => {
    const debounceSearch = setTimeout(async () => {
      setIsTyping(false);
      setProductsSearch(
        (
          await axiosInstance.get(
            `products?filters[name][$contains]=${searchKey.trim()}`
          )
        ).data
      );
    }, 1000);

    return () => {
      clearTimeout(debounceSearch);
    };
  }, [searchKey]);
  return (
    <SearchBar
      placeholder="Search products"
      suffix={<SearchOutlined />}
      onChange={e => handleOnChange(e)}
    />
  );
}

export default HeaderSearch;
