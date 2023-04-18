import { SearchOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../store/Context';
import { SearchBar } from './style';
import axiosInstance from '../../../shared/services/http-client';
import { useNavigate } from 'react-router-dom';

function HeaderSearch(props) {
  const searchContext = useContext(Context);
  const [isTyping, setIsTyping] = useState(false);
  const handleOnChange = e => {
    searchContext.setSearchKeyword(e.target.value);
    setIsTyping(true);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const debounceSearch = setTimeout(async () => {
      setIsTyping(false);
      if (searchContext.searchKeyword.length === 0) {
        searchContext.setSearchResult([]);
      } else {
        const res = await axiosInstance.get(
          `/products?filters[name][$contains]=${searchContext.searchKeyword.trim()}`
        );
        searchContext.setSearchResult(res.data);
        searchContext.setPageSize(res.meta.pagination.pageSize);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceSearch);
    };
  }, [searchContext.searchKeyword]);

  return (
    <SearchBar
      onClick={() => navigate('search')}
      placeholder="Search products"
      suffix={<SearchOutlined />}
      onChange={e => handleOnChange(e)}
    />
  );
}

export default HeaderSearch;
