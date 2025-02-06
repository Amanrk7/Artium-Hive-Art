import { useState } from "react";
import { auth } from "../firebase/firebase"; // Ensure you import `auth`
import { signOut } from "firebase/auth"; // Import signOut for logout functionality

export const LogOut = ({ onClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      // Redirect or update state as needed
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <button id="log-out-button" onClick={handleLogout}>
        {/* <button id="log-out-button"> */}
          <i className="fa-solid fa-right-from-bracket fa-flip-both"></i>
        </button>
      ) : (
        <button onClick={onClick}>Log In</button>
      )}
    </>
  );
};
