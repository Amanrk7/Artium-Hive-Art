export const LogAlert = ({ isLoggedOutfunc, isLoggedOut }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "50%",
        background: "green",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 1000,
      }}
    >
      <p>You logged out successfully!</p>
      <button
        onClick={() => isLoggedOutfunc(false)}
        style={{
          background: "white",
          color: "green",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
};
