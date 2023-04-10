import { SearchOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../store/Context';
import { SearchBar } from './style';
import axiosInstance from '../../../shared/services/http-client';

function HeaderSearch(props) {
  const searchContext = useContext(Context);
  const [isTyping, setIsTyping] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const handleOnChange = e => {
    setSearchKey(e.target.value);
    setIsTyping(true);
  };
  useEffect(() => {
    const debounceSearch = setTimeout(async () => {
      setIsTyping(false);
      searchContext.setSearchResult(
        (
          await axiosInstance.get(
            `/products?filters[name][$contains]=${searchKey}`
          )
        ).data
      );
      console.log(searchContext.searchResult);
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
