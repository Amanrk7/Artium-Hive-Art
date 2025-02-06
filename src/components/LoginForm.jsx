import React, { useState, useRef, useEffect } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase"; // Correct import
import artiumhiveLogo from "../assets/images/artiumhiveLogo.png";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import axios from "axios"; // Optional for backend API calls
const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(true);
  const formRef = useRef(null);

  // Close the form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [error, setError] = useState("");

  // Toggle password visibility
  const toggleViewPass = () => {
    setIsVisible(!isVisible);
  };

  // Handle sign-in
  const handleSignIn = async () => {
    setError(""); // Clear previous errors
    setErrorEmail(""); // Clear email error
    setErrorPassword(""); // Clear password error

    // Basic validation
    if (!email) {
      setErrorEmail("Email is required!");
      return;
    }
    if (!password) {
      setErrorPassword("Password is required!");
      return;
    }

    try {
      // Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // console.log("User signed in:", user);

      // Optional: Use Axios to call a backend API after successful sign-in
      const response = await axios.post("https://your-backend-api.com/login", {
        uid: user.uid,
        email: user.email,
      });
      // console.log("Backend response:", response.data);

      // Redirect or perform other actions after successful sign-in
      // Example: Redirect to the home page
      // history.push("/"); // If using React Router
    } catch (error) {
      setError("Invalid email or password!"); // Display error message
      console.error("Error signing in:", error.message);
    }
  };

  // Show the form on page reload
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="login-overlay">
      <div ref={formRef} className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {/* <input type="email" id="email" name="email" required /> */}
            <input
              type="email"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setErrorEmail(value === "" ? "Email is required!" : "");
                setEmail(value);
              }}
              placeholder="Email"
              style={{
                height: "3em",
                background: "rgb(255 255 255 / 0%)",
                border: "0",
                // color: "#615e5e",
                fontWeight: "900",
                fontFamily: "circular",
                // letterSpacing: " .3px",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                width: "90%",
                letterSpacing: "1px",
                color: "black",
              }}
              name="email"
              //   required
            />
            {errorEmail && (
              <p
                style={{
                  color: " #df4d4d",
                  fontFamily: "circular",
                  transition: ".9s ease-in-out",
                  fontSize: "11px",
                }}
              >
                <i
                  className="fa-solid fa-circle-exclamation"
                  style={{
                    color: "rgb(223, 77, 77)",
                    fontSize: "11px",
                    marginRight: "3px",
                  }}
                ></i>
                {errorEmail}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            {/* <input type="password" id="password" name="password" required /> */}
            <input
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setErrorPassword(value === "" ? "Password is required!" : "");
                setPassword(value);
              }}
              placeholder="Password"
              style={{
                height: "3em",
                background: "rgb(255 255 255 / 0%)",
                border: "0",
                // color: "#615e5e",
                fontWeight: "900",
                fontFamily: "circular",
                // letterSpacing: " .3px",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                width: "90%",
                letterSpacing: "1px",
                color: "black",
              }}
              aria-describedby="passwordError"
            />
            <span>
              <i
                className={
                  isVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                }
                style={{
                  color: "white",
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={toggleViewPass}
              ></i>
            </span>
            {errorPassword && (
              <p
                style={{
                  color: " #df4d4d",
                  fontFamily: "circular",
                  transition: ".9s ease-in-out",
                  fontSize: "11px",
                }}
              >
                <i
                  className="fa-solid fa-circle-exclamation"
                  style={{
                    color: "rgb(223, 77, 77)",
                    fontSize: "11px",
                    marginRight: "3px",
                  }}
                ></i>
                {errorPassword}
              </p>
            )}
          </div>
          <button
            id="loginBtn"
            onClick={handleSignIn}
            style={{
              width: "100%",
              padding: "17px",
              fontFamily: "bolde",
              backgroundColor: "#000000",
              boxShadow: "none",
              fontSize: "13px",
              borderBottom: "24px",
            }}
          >
            Log In
          </button>
          {error && (
            <p
              style={{
                color: " #df4d4d",
                fontFamily: "circular",
                transition: ".9s ease-in-out",
                fontSize: "11px",
              }}
            >
              <i
                className="fa-solid fa-circle-exclamation"
                style={{
                  color: "rgb(223, 77, 77)",
                  fontSize: "11px",
                  marginRight: "3px",
                }}
              ></i>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
