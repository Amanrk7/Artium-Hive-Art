import React from "react";

const ArtCard = ({ data }) => {
  const { name, price, image, slug, description } = data;

  React.useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {/* ---------img-art-description------- */}
      <div id="main1-1st-content">
        <div className="img-art-desc">
          <div>
            <h3>Title: {name}</h3>
          </div>
          <div>current price: {price}ETH</div>
          <div>
            <p>About this piece: {description}</p>
          </div>
        </div>
        {/* ----------buy btn-------- */}
        <div>
          <div>
            <input
              type="number"
              placeholder="min-value-10!!"
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                color: "#615e5e",
                fontWeight: "900",
                fontFamily: "circular",
                letterSpacing: " .3px",
              }}
            />
          </div>
          <span id="container_buy_btn" className="material-symbols-outlined">
            arrow_outward
          </span>
        </div>
      </div>

      {/* ---------img-art------- */}
      <div id="img_display_art">
        <img
          id="img_display_art_img"
          src={image}
          alt="art1"
          style={{
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            KhtmlUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
            userSelect: "none",
            WebkitUserDrag: "none",
            userDrag: "none",
            // pointerEvents: "none",
          }}
        />
      </div>
    </>
  );
};

export default ArtCard;
