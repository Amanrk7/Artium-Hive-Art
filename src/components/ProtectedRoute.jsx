import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../GlobalContext/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, intendedPath } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
