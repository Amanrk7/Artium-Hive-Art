import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Ensure you import `db`
import { processPayment } from "../utils/razorpay"; // You'll create this function later

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const querySnapshot = await getDocs(collection(db, "submissions"));
      const submissionsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubmissions(submissionsData);
    };

    fetchSubmissions();
  }, []);

  const handleMarkAsSold = async (item) => {
    try {
      // Update the status in Firestore
      await updateDoc(doc(db, "submissions", item.id), {
        status: "sold",
      });

      // Trigger payment process
      await processPayment(item.price, item.userEmail);

      // Refresh the submissions
      const querySnapshot = await getDocs(collection(db, "submissions"));
      const submissionsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubmissions(submissionsData);
    } catch (error) {
      console.error("Error marking as sold:", error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {submissions.map((item, index) => (
          <li key={index}>
            <p>Image URL: {item.fileUrl}</p>
            <p>Price: {item.price}</p>
            <p>Status: {item.status}</p>
            <p>User Email: {item.userEmail}</p>
            {item.status === "under_review" && (
              <button onClick={() => handleMarkAsSold(item)}>
                Mark as Sold
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
