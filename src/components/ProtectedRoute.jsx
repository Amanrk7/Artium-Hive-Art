import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/" />; // Redirect to home if not authenticated
  }
  return children;
};

export default ProtectedRoute;