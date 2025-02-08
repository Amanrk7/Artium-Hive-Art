// src/components/SignIn.jsx
import React, { useState, useContext } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase"; // Correct import
import artiumhiveLogo from "../assets/images/artiumhiveLogo.png";
import axios from "axios"; // Optional for backend API calls
import { Footer } from "./Footer";
import { AuthContext } from "../GlobalContext/AuthContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn, intendedPath } = useContext(AuthContext);
  const navigate = useNavigate();

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
      navigate(intendedPath);
      const user = userCredential.user;
      // console.log("User signed in:", user);
      setIsLoggedIn(true);
      alert("logged in successfully!!");

      // Optional: Use Axios to call a backend API after successful sign-in
      // const response = await axios.post("https://your-backend-api.com/login", {
      //   uid: user.uid,
      //   email: user.email,
      // });
      // console.log("Backend response:", response.data);

      // Redirect or perform other actions after successful sign-in
      // Example: Redirect to the home page
      // history.push("/"); // If using React Router
    } catch (error) {
      setError("Invalid email or password!"); // Display error message
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <>
          <div id="signin-mobile-ori">
            <div className="login-nav">
              <div id="logo-signin-parent-div">
                <img id="logo-signin" src={artiumhiveLogo} alt="logo" />
              </div>
              <div
                style={{
                  fontFamily: "BOLDE",
                  letterSpacing: "2px",
                }}
              >
                Not a member ?
                <span
                  style={{
                    fontFamily: "BOLDE",
                    letterSpacing: "2px",
                  }}
                >
                  fill
                </span>
              </div>
            </div>
            <div id="signinDiv">
              {/* --------left side------ */}
              <div className="signInDiv-leftside">
                <div id="signindiv_subdiv_first">
                  <div className="logo-login-grand-parent">
                    <div
                      style={{
                        width: "100%",
                        fontFamily: "Phonk Contrast DEMO",
                      }}
                    >
                      Log into Artium Hive
                    </div>
                  </div>
                  <div
                    className="mainLoginFields-div"
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "0.9px solid rgb(195, 195, 195)",
                      }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const value = e.target.value;
                          setErrorEmail(
                            value === "" ? "Email is required!" : ""
                          );
                          setEmail(value);
                        }}
                        placeholder="Email"
                        style={{
                          height: "3em",
                          background: "rgb(255 255 255 / 0%)",
                          border: "0",
                          color: "#615e5e",
                          fontWeight: "900",
                          fontFamily: "circular",
                          letterSpacing: " .3px",
                          borderTop: "none",
                          borderLeft: "none",
                          borderRight: "none",
                          width: "90%",
                        }}
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
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "0.9px solid rgb(195, 195, 195)",
                      }}
                    >
                      <input
                        type={isVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          const value = e.target.value;
                          setErrorPassword(
                            value === "" ? "Password is required!" : ""
                          );
                          setPassword(value);
                        }}
                        placeholder="Password"
                        style={{
                          height: "3em",
                          background: "rgb(255 255 255 / 0%)",
                          border: "0",
                          color: "#615e5e",
                          fontWeight: "900",
                          fontFamily: "circular",
                          letterSpacing: " .3px",
                          borderTop: "none",
                          borderLeft: "none",
                          borderRight: "none",
                          width: "90%",
                        }}
                        aria-describedby="passwordError"
                      />
                      <span>
                        <i
                          className={
                            isVisible
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
                          }
                          style={{
                            color: "rgb(97, 94, 94)",
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
                    <div className="login-btn-div">
                      <button id="loginBtn" onClick={handleSignIn}>
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
                    </div>
                  </div>
                </div>
              </div>

              {/* --------right side---------- */}
              <div id="loginPageImg-Ins">
                <div id="login-page-img-instructions">
                  {/* <div id="logo-img-signin" style={{ width: "100%" }}>
                <Link to="/" className="text-xl font-semibold">
                  <img id="logo-img" src={artiumhiveLogo} alt="logo" />
                </Link>
              </div> */}

                  <div>
                    <h3
                      id="signinDiv-h3"
                      style={{ fontFamily: "'Phonk Contrast DEMO'" }}
                    >
                      Discover The World
                    </h3>
                  </div>

                  <div>
                    <h3
                      id="signinDiv-h3"
                      style={{ fontFamily: "'Phonk Contrast DEMO'" }}
                    >
                      Best Art and Artists
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* <Footer id=" footer-signIn-Page" /> */}
          </div>
          {/* -------------for moblie hidden---------------- */}
          <div id="login-mobile-signin-hidden">
            <div className="login-nav-hidden">
              <div
                style={{ height: "23px", width: "50%", marginLeft: "-65px" }}
              >
                <img
                  src={artiumhiveLogo}
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="login-nav-hidden-div"
                style={{
                  fontFamily: "BOLDE",
                  letterSpacing: "2px",
                }}
              >
                Not a member ?
                <span
                  style={{
                    fontFamily: "BOLDE",
                    letterSpacing: "2px",
                  }}
                >
                  fill
                </span>
              </div>
            </div>

            <div id="signinDiv-hidden" style={{ width: "100%" }}>
              {/* --------left side------ */}
              <div className="signInDiv-leftside-hidden">
                <div id="signindiv_subdiv_first-hidden">
                  <div className="logo-login-grand-parent">
                    <div
                      style={{
                        width: "100%",
                        fontFamily: "Phonk Contrast DEMO",
                      }}
                    >
                      Log into Artium Hive
                    </div>
                  </div>
                  <div
                    className="mainLoginFields-div"
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "0.9px solid rgb(195, 195, 195)",
                      }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const value = e.target.value;
                          setErrorEmail(
                            value === "" ? "Email is required!" : ""
                          );
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
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "0.9px solid rgb(195, 195, 195)",
                      }}
                    >
                      <input
                        type={isVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          const value = e.target.value;
                          setErrorPassword(
                            value === "" ? "Password is required!" : ""
                          );
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
                            isVisible
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
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
                    <div className="login-btn-div">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Footer id=" footer-signIn-Page" /> */}
          </div>
        </>
      )}
    </>
  );
};

export default SignIn;
