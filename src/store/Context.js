import { createContext, useEffect, useState } from 'react';
import { parseJWT } from '../shared/constants';

const Context = createContext({
  isLogin: false,
  setIsLogin: () => {},
  searchResult: [],
  setSearchResult: () => {},
});
function ContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
