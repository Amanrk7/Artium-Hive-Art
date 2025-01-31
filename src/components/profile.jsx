// src/components/Profile.jsx
import React, { useEffect, useState } from "react";
import { auth, db, doc, getDoc } from "../firebase/firebase";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUserData(userSnap.data());
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "antiquewhite",
        padding: "73px",
        alignItems: "center",
        gap: "34px",
        height: "80vh",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1>Welcome Back</h1>
      </div>
      <div style={{ width: "100%" }}>User: {user.email}</div>
      <div style={{ width: "100%" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
export default Profile;
