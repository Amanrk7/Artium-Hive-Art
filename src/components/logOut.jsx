import { useState, useContext } from "react";
import { auth } from "../firebase/firebase"; // Ensure you import `auth`
import { signOut } from "firebase/auth"; // Import signOut for logout functionality
import { AuthContext } from "../GlobalContext/AuthContext";
import SignIn from "./signIn";
import { useNavigate } from "react-router-dom";
import { LogAlert } from "./logOutSlert";

export const LogOut = () => {
  const { isLoggedIn, setIsLoggedIn, setIntendedPath } =
    useContext(AuthContext);
  const [isLogOutAlert, setIsLogOutAlert] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // console.log("User logged out successfully");
      // setIsLogOutAlert(true); // Show the logout success alert
      alert("user logged out successfully!!");
      // Delay navigation to allow the user to see the alert
      // setTimeout(() => {
      setIsLoggedIn(false);
      setIntendedPath("/");
      navigate("/");
      // }, 3000); // Navigate after 3 seconds
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <button id="log-out-button" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket fa-flip-both"></i>
        </button>
      ) : (
        <button id="log-out-button" onClick={() => setShowSignIn(true)}>
          <i
            className="fa-solid fa-right-to-bracket"
            style={{ color: "black" }}
          ></i>
        </button>
      )}

      {showSignIn && !isLoggedIn && (
        <div
          style={{
            position: "absolute",
            zIndex: "999",
            width: "100vw",
            height: "100vh",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          {/* <button
            id="go_back_from_login"
            onClick={() => setShowSignIn(false)}
            style={{
              background: "none",
              border: "none",
              padding: "0",
              position: "absolute",
              zIndex: "1000",
              boxShadow: "none",
              top: "27.6%",
              left: "81%",
            }}
          >
            <i
              className="fa-solid fa-circle-xmark"
              style={{ color: "#000000" }}
            ></i>
          </button> */}
          <SignIn onClose = {setShowSignIn}/>
        </div>
      )}

      {isLogOutAlert && (
        <LogAlert
          isLoggedOutfunc={setIsLogOutAlert}
          isLoggedOut={isLogOutAlert}
        />
      )}
    </>
  );
};
