import { SearchOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../store/Context';
import { SearchBar } from './style';
import axiosInstance from '../../../shared/services/http-client';

function HeaderSearch(props) {
  const searchContext = useContext(Context);
  const [isTyping, setIsTyping] = useState(false);
  const handleOnChange = e => {
    searchContext.setSearchKeyword(e.target.value);
    setIsTyping(true);
  };
  useEffect(() => {
    const debounceSearch = setTimeout(async () => {
      setIsTyping(false);
      if (searchContext.searchKeyword.length === 0) {
        searchContext.setSearchResult([]);
      } else {
        searchContext.setSearchResult(
          (
            await axiosInstance.get(
              `/products?filters[name][$contains]=${searchContext.searchKeyword.trim()}`
            )
          ).data
        );
      }
    }, 1000);

    return () => {
      clearTimeout(debounceSearch);
      searchContext.setSearchKeyword('');
    };
  }, [searchContext.searchKeyword]);

  return (
    <SearchBar
      placeholder="Search products"
      suffix={<SearchOutlined />}
      onChange={e => handleOnChange(e)}
    />
  );
}

export default HeaderSearch;
