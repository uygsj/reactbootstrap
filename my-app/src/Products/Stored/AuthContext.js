import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialTokenData = JSON.parse(localStorage.getItem('token'));
  const [token, setToken] = useState(initialTokenData?.token);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);

    // Set the token and its expiration time in local storage
    const tokenData = {
      token,
      expirationTime: new Date().getTime() + 1000 * 60 * 5, // 5 minutes in milliseconds
    };
    localStorage.setItem('token', JSON.stringify(tokenData));

    // Set a new timeout for automatic logout if the user is active
    setTimeout(logoutHandler, tokenData.expirationTime - new Date().getTime());
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  // Check if the token is still valid on page load
  useEffect(() => {
    if (initialTokenData && initialTokenData.expirationTime > new Date().getTime()) {
      // Token is still valid
      setToken(initialTokenData.token);

      // Set a new timeout for automatic logout if the user is active
      setTimeout(logoutHandler, initialTokenData.expirationTime - new Date().getTime());
    } else {
      // Token has expired; log the user out
      logoutHandler();
    }

    // Warn the user if they attempt to refresh the page while the token is valid
    window.addEventListener('beforeunload', (event) => {
      if (initialTokenData && initialTokenData.expirationTime > new Date().getTime()) {
        event.preventDefault();
        event.returnValue = 'You have an active session. Refreshing the page will log you out.';
      }
    });

  }, [initialTokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
