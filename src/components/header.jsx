import React from "react";

export const Header = () => {
  return (
    <>
      <div id="headerDiv">
        <div className="headerdiv-original-child">
          <div>
            <h1 id="header-div-h1-1">Collect And Sell Digital</h1>
          </div>

          <div>
            <h1 id="header-div-h1-2">Arts At Your Own Price</h1>
          </div>
        </div>

        <div className="headerDiv-hidden-mobile-child">
          <div>
            <h1 id="header-div-h1-1">Collect</h1>
          </div>
          <div>
            <h1 id="header-div-h1-2">And Sell Art</h1>
          </div>
          {/* <div>
            <h1 id="header-div-h1-1">DIGITAL ARTS</h1>
          </div> */}

          <div>
            <h1 id="header-div-h1-3"> At Your Price</h1>
          </div>
        </div>
      </div>
    </>
  );
};
