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
});
function ContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = parseJWT(localStorage.getItem('at'));
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
