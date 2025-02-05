import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Ensure you import `db`
// import { auth } from "../firebase/firebase"; // Ensure you import `auth`
// import { signOut } from "firebase/auth"; // Import signOut for logout functionality

const Profile = ({ user }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHistory = async () => {
      const q = query(
        collection(db, "submissions"),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const historyData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHistory(historyData);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchHistory();
  }, [user.uid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="profile-page-child1">
        <h1>Your Uploads</h1>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {/* Display the image instead of the URL */}
              <div style={{ marginBottom: "10px" }}>
                <img
                  src={item.fileUrl}
                  alt={`Uploaded by ${user.email}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "path/to/fallback-image.jpg"; // Fallback image
                  }}
                />
              </div>
              <p>SP: {item.price}</p>
              <p>
                Status:{" "}
                {item.status === "sold" ? (
                  <span
                    style={{
                      color: "green",
                      fontFamily: "Phonk Contrast DEMO",
                      fontSize: "14px",
                    }}
                  >
                    {item.status}
                  </span>
                ) : (
                  <span
                    style={{
                      color: "#dea600",
                      fontFamily: "Phonk Contrast DEMO",
                      fontSize: "14px",
                    }}
                  >
                    {item.status}
                  </span>
                )}
              </p>
              <p>Submitted on: {item.createdAt.toDate().toDateString()}</p>
              {/* {item.status === "under_review" && (
                <button onClick={() => handleMarkAsSold(item)}>
                  Mark as Sold
                </button>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
