import { createContext, useEffect, useRef, useState } from 'react';
import { parseJWT } from '../shared/constants';

const Context = createContext({
  isLogin: false,
  setIsLogin: () => {},
  searchResult: [],
  setSearchResult: () => {},
  productsInCart: [],
  searchKeyword: '',
  setSearchKeyword: () => undefined,
  searchRef: {},
  totalProductSearch: 0,
  setTotalProductSearch: () => {},
  userId: null,
  currentPage: 1,
  setCurrentPage: () => {},
});
function ContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageSize, setPageSize] = useState();
  const [userId, setUserId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProductSearch, setTotalProductSearch] = useState(0);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = parseJWT(localStorage.getItem('at'));
    setUserId(parseJWT(localStorage.getItem('at')).id);
    if (currentTime > expirationTime) {
      console.log('The token has expired');
      setIsLogin(false);
    } else {
      console.log('The token is still valid');
      setIsLogin(true);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        searchResult,
        setSearchResult,
        productsInCart,
        searchKeyword,
        setSearchKeyword,
        pageSize,
        setPageSize,
        userId,
        currentPage,
        setCurrentPage,
        totalProductSearch,
        setTotalProductSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
