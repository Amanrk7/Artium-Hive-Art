import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import artiumhiveLogo from "../assets/images/artiumhiveLogo.png";
// import { toggleStatusTab } from "../stores/cart"; // Import the toggleStatusTab action
// import Cart from "./cart"; // Import the Cart component
export const PageNavigation = () => {
  const handleToggleCart = () => {
    console.log("Cart button clicked!"); // Log the click event
    dispatch(toggleStatusTab());
  };

  return (
    <>
      <header id="headerTag">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",

            alignItems: "center",
            // margin: "0 3em",
          }}
        >
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
              <Link to="sell" className="text-xl font-semibold">
                Sell
              </Link>
              {/* </button> */}
              {/* <button id="create"> */}
              <Link to="support" className="text-xl font-semibold">
                Support
              </Link>
              {/* </button> */}
              {/* <button id="create"> */}
              <Link to="about" className="text-xl font-semibold">
                About Us
              </Link>
              {/* </button> */}
            </nav>
          </div>

          <div className="header-right">
            {/* <button id="login">Login</button> */}
            <Link to="profile" className="text-xl font-semibold">
              <button id="profile">
                <i className="fa-regular fa-user"></i>
              </button>
            </Link>

            <button id="cart" onClick={handleToggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
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
            <Link to="sell" className="text-xl font-semibold">
              Sell
            </Link>
            {/* </button> */}
            {/* <button id="create"> */}
            <Link to="support" className="text-xl font-semibold">
              Support
            </Link>
            {/* </button> */}
            {/* <button id="create"> */}
            <Link to="about" className="text-xl font-semibold">
              About Us
            </Link>
            {/* </button> */}
          </nav>
        </div>
      </header>
    </>
  );
};
