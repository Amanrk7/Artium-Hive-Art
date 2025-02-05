import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "inherit",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
    fontFamily: "'Phonk Contrast DEMO'",
  },
  text: {
    fontSize: "1.3rem",
    color: "#666",
    marginBottom: "20px",
    fontFamily: "'BOLDE'",
  },
  button: {
    backgroundColor: "#ffdd00",
    color: "#000",
    padding: "15px 30px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontFamily: "'BOLDE'",
    ":hover": {
      backgroundColor: "#ffcc00", // Darker yellow on hover
      transform: "scale(1.05)", // Slightly scale up
    },
  },
};
export const SupportPage = () => {
  const handleBuyCoffee = () => {
    // window.open("https://www.buymeacoffee.com/yourusername", "_blank");
    alert("Thanks for a coffee");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Support Us</h1>
      <p style={styles.text}>
        If you enjoy our work, consider buying us a coffee to keep us going!
      </p>
      <button style={styles.button} onClick={handleBuyCoffee}>
        <FontAwesomeIcon icon={faCoffee} style={{ marginRight: "10px" }} />
        Buy Us a Coffee
      </button>
    </div>
  );
};
