import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("authToken");
  const [token, setToken] = useState(initialToken);

  // Calculate the isLoggedIn value based on the presence of the token
  const userLoggedIn = !!token;

  useEffect(() => {
    // Initialize token from localStorage when the app loads
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

 // Inside your loginHandler function
const loginHandler = (token) => {
  setToken(token);
  localStorage.setItem('authToken', token); // Store the token in localStorage
};

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
  };

  const contextValue = {
    token: token,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: userLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
export { AuthContextProvider };
