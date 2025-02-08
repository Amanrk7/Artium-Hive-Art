// AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [intendedPath, setIntendedPath] = useState('/');

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, intendedPath, setIntendedPath }}>
      {children}
    </AuthContext.Provider>
  );
};
