export function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          fontFamily: "initial",
          fontSize: "20px",
          display: "flex",
          gap: "5px",
        }}
      >
        <div>
          <i
            class="fa-brands fa-telegram"
            style={{
              color: "#74C0FC",
              cursor: "pointer",
              margin: "14px 0px 2px 0",
              fontSize: "12px",
            }}
          ></i>
        </div>
        <div className="instagram-icon">
          <i
            class="fa-brands fa-instagram"
            style={{
              cursor: "pointer",
              margin: "14px 0px 2px 0",
              fontSize: "12px",
            }}
          ></i>
        </div>
        <div>
          <i
            class="fa-brands fa-x-twitter"
            style={{
              color: "#000000",
              cursor: "pointer",
              margin: "14px 0px 2px 0",
              fontSize: "12px",
            }}
          ></i>
        </div>
        <div>
          <i
            class="fa-solid fa-envelope"
            style={{
              cursor: "pointer",
              margin: "14px 0px 2px 0",
              fontSize: "12px",
              color: "#D14836",
            }}
          ></i>
        </div>
      </div>
      <div className="footer-child1">
        <div style={{ fontFamily: "BOLDE" }}>
          © 2025 Artium Hive. All rights reserved.
        </div>
        {/* <div>All rights reserved</div> */}
      </div>

      <div className="footer-child2" style={{ gap: "2px" }}>
        <span className="footer-child2-1">
          <i class="fa-solid fa-location-dot" style={{ color: "#FFD43B" }}></i>
        </span>

        <div className="footer-child2-2">
          MAYA INCOPRATION, HNO. 303 GANESH GALAXY CITY BUILDING AYODHYA BYPASS
          ROAD BHOPAL 462041 Dist-BHOPAL
        </div>
      </div>
    </div>
  );
}
