import React from "react";

export const Header = () => {
  return (
    <>
      <div id="headerDiv">
        <div className="headerdiv-original-child">
          <div>
            <h1 id="header-div-h1-1">COLLECT AND SELL</h1>
          </div>

          <div>
            <h1 id="header-div-h1-2">DIGITAL ARTS AT YOUR OWN PRICE</h1>
          </div>
        </div>

        <div className="headerDiv-hidden-mobile-child">
          <div>
            <h1 id="header-div-h1-1">COLLECT</h1>
          </div>
          <div>
            <h1 id="header-div-h1-2">AND SELL ART</h1>
          </div>
          {/* <div>
            <h1 id="header-div-h1-1">DIGITAL ARTS</h1>
          </div> */}

          <div>
            <h1 id="header-div-h1-3"> AT YOUR PRICE</h1>
          </div>
        </div>
      </div>
    </>
  );
};
