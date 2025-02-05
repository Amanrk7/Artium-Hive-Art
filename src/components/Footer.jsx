import logo from "../assets/images/artiumhiveLogo.png";
export function Footer() {
  return (
    <div className="footer">
      {/* ----from px less than 800---------------------- */}
      <div className="footer_main">
        <div id="footer_logo_div_parent">
          <div id="footer_logo_div">
            <img src={logo} alt="logo" width={100} height={100} />
          </div>
        </div>
        <div id="footer_child_1">
          <div
            style={{
              fontFamily: "initial",
              fontSize: "20px",
              display: "flex",
              gap: "5px",
            }}
          >
            <div>
              <i id="telegram" className="fa-brands fa-telegram"></i>
            </div>
            <div className="instagram-icon">
              <a
                href="https://www.instagram.com/artiumhive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i id="instagram" className="fa-brands fa-instagram"></i>{" "}
              </a>
            </div>
            <div>
              <a
                href="https://x.com/ArtiumHive?t=ZqhhacLJ8laU3w9hJtDWfQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i id="x" className="fa-brands fa-x-twitter"></i>{" "}
              </a>
            </div>
            {/* <div>
            <i id="gmail" className="fa-solid fa-envelope"></i>
          </div> */}
          </div>
          <div style={{ fontFamily: "BOLDE" }}>contact@artiumhive.art</div>
        </div>

        <div id="footer_child1_parent">
          <div className="footer-child1">
            <div style={{ fontFamily: "BOLDE" }}>
              © 2025 Artium Hive. All rights reserved.
            </div>
            {/* <div>All rights reserved</div> */}
            <div className="footer-child2" style={{ gap: "2px" }}>
              <span className="footer-child2-1">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "#FFD43B" }}
                ></i>
              </span>

              <div className="footer-child2-2">
                MAYA INCOPRATION, HNO. 303 GANESH GALAXY CITY BUILDING AYODHYA
                BYPASS ROAD BHOPAL 462041 Dist-BHOPAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
