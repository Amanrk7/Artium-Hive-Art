import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import artiumhiveLogo from "../assets/images/artiumhiveLogo.png";
import { AuthContext } from "../GlobalContext/AuthContext";
import { LogOut } from "./logOut";
import SignIn from "./signIn";
// import { toggleStatusTab } from "../stores/cart"; // Import the toggleStatusTab action
// import Cart from "./cart"; // Import the Cart component

export const PageNavigation = () => {
  const handleToggleCart = () => {
    console.log("Cart button clicked!"); // Log the click event
    dispatch(toggleStatusTab());
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to track the menu container
  const [showSignIn, setShowSignIn] = useState(false);
  const { isLoggedIn, setIntendedPath } = useContext(AuthContext);
  const navigate = useNavigate();
  // Function to open/close the menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  //-------showing the form when clicked on sell or profile
  const handleProtectedRouteClick = (path) => {
    if (!isLoggedIn) {
      setIntendedPath(path); // Store the intended path
      setShowSignIn(true);
    } else {
      navigate(path);
    }
  };

  // Effect to detect clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header id="headerTag">
        <div id="headerTag_1stdiv">
          <div className="logo-div">
            <Link to="/" className="text-xl font-semibold">
              {/* <h1 id="logoText" className="text-gradient cursor-pointer">  */}
              <img id="logo-img" src={artiumhiveLogo} alt="logo" />
              {/* </h1> */}
            </Link>
          </div>
          <div className="header-nav-mobile-ori">
            <nav id="nav" style={{ padding: "2px" }}>
              {/* <button id="drops"> */}
              <Link to="buy" className="text-xl font-semibold">
                Buy
              </Link>
              {/* </button> */}
              {/* <button id="explore"> */}
              <Link
                to="sell"
                className="text-xl font-semibold"
                onClick={() => handleProtectedRouteClick("/sell")}
              >
                {/* <button onClick={() => handleProtectedRouteClick("/sell")}> */}
                Sell
                {/* </button> */}
              </Link>
              {/* </button> */}
              {/* <button id="create"> */}
              <Link to="support" className="text-xl font-semibold">
                Support
              </Link>
              {/* </button> */}
              {/* <button id="create"> */}
              <Link to="about" className="text-xl font-semibold">
                About
              </Link>
              <Link to="contactUs" className="text-xl font-semibold">
              Contact
            </Link>
              {/* </button> */}
            </nav>
          </div>

          <div className="header-right">
            {/* <button id="login">Login</button> */}
            {/* <Link to={logOut}> */}
            <LogOut />
            {/* </Link> */}
            <Link to="profile" className="text-xl font-semibold">
              <button
                id="profile"
                onClick={() => handleProtectedRouteClick("/profile")}
              >
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>

            <button id="cart" onClick={handleToggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>

          <div className="header-right-hidden-mobile" ref={menuRef}>
            {/* Hamburger Icon (Visible when menu is closed) */}
            {!isMenuOpen && (
              <button id="cart" onClick={handleToggleMenu}>
                <i
                  className="fa-solid fa-bars"
                  style={{ color: "#000000" }}
                ></i>
              </button>
            )}

            {/* Menu Content (Visible when menu is open) */}
            {isMenuOpen && (
              <>
                <LogOut />
                <Link
                  to="profile"
                  className="text-xl font-semibold"
                  // onClick={onProfileClick}
                >
                  <button
                    id="profile"
                    onClick={() => handleProtectedRouteClick("/profile")}
                  >
                    <i className="fa-solid fa-user"></i>
                  </button>
                </Link>

                <button id="cart" onClick={handleToggleCart}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>

                {/* Close Button (Cross Icon) */}
                <button id="cart" onClick={handleCloseMenu}>
                  <i
                    className="fa-solid fa-circle-xmark"
                    style={{ color: "#000000" }}
                  ></i>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="header-nav-mobile-hidden">
          <nav id="nav" style={{ padding: "2px" }}>
            {/* <utton id="drops"> */}
            <Link to="buy" className="text-xl font-semibold">
              Buy
            </Link>
            {/* </button> */}
            {/* <button id="explore"> */}
            <Link
              to="sell"
              className="text-xl font-semibold"
              onClick={() => handleProtectedRouteClick("/sell")}
            >
              {/* <button onClick={() => handleProtectedRouteClick("/sell")}> */}
              Sell
              {/* </button> */}
            </Link>
            {/* </button> */}
            {/* <button id="create"> */}
            <Link to="support" className="text-xl font-semibold">
              Support
            </Link>
            {/* </button> */}
            {/* <button id="create"> */}
            <Link to="about" className="text-xl font-semibold">
              About
            </Link>
            <Link to="contactUs" className="text-xl font-semibold">
              Contact
            </Link>
            {/* </button> */}
          </nav>
        </div>

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
                zIndex: " 1000",
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
            <SignIn onClose={setShowSignIn} />
          </div>
        )}
      </header>
    </>
  );
};
