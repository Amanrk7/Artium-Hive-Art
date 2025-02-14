import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import artiumhiveLogo from "../assets/images/artiumhiveLogo.png";
import { AuthContext } from "../GlobalContext/AuthContext";
import { LogOut } from "./logOut";
import SignIn from "./signIn";

export const PageNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
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
              <Link to="buy" className="text-xl font-semibold">
                Buy
              </Link>
              <Link
                to="sell"
                className="text-xl font-semibold"
                onClick={() => handleProtectedRouteClick("/sell")}
              >
                Sell
              </Link>
              <Link to="support" className="text-xl font-semibold">
                Support
              </Link>
              <Link to="about" className="text-xl font-semibold">
                About Us
              </Link>
              <Link to="contactUs" className="text-xl font-semibold">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="header-right">
            <LogOut />
            <Link to="profile" className="text-xl font-semibold">
              <button
                id="profile"
                onClick={() => handleProtectedRouteClick("/profile")}
              >
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>

            <button id="cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>

          <div className="header-right-hidden-mobile" ref={menuRef}>
            {/* Hamburger Icon (Visible when menu is closed) */}
            {!isMenuOpen && (
              <button id="cart" onClick={handleToggleMenu}>
                <i
                  className="fa-solid fa-bars"
                  // style={{ color: "#000000" }}
                ></i>
              </button>
            )}

            {/* Menu Content (Visible when menu is open) */}
            {isMenuOpen && (
              <>
                <LogOut />
                <Link to="profile" className="text-xl font-semibold">
                  <button
                    id="profile"
                    onClick={() => handleProtectedRouteClick("/profile")}
                  >
                    <i className="fa-solid fa-user"></i>
                  </button>
                </Link>

                <button id="cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>

                <button id="cart" onClick={handleCloseMenu}>
                  <i
                    className="fa-solid fa-circle-xmark"
                    // style={{ color: "#000000" }}
                  ></i>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="header-nav-mobile-hidden">
          <nav id="nav" style={{ padding: "2px" }}>
            <Link to="buy" className="text-xl font-semibold">
              Buy
            </Link>
            <Link
              to="sell"
              className="text-xl font-semibold"
              onClick={() => handleProtectedRouteClick("/sell")}
            >
              Sell
            </Link>
            <Link to="support" className="text-xl font-semibold">
              Support
            </Link>
            <Link to="about" className="text-xl font-semibold">
              About Us
            </Link>
            <Link to="contactUs" className="text-xl font-semibold">
              Contact Us
            </Link>
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
            <SignIn onClose={setShowSignIn} />
          </div>
        )}
      </header>
    </>
  );
};
