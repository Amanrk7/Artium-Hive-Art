import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  auth,
  db,
  setDoc,
  doc,
  collection,
  serverTimestamp,
  storage,
} from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { FileUpload } from "./fileUpload";
import { useRef, useState } from "react";

export const SellPage = () => {
  const [files, setFiles] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [priceErr, setPriceErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [error, setError] = useState("");
  const user = auth.currentUser; // Ensure you have a valid user object
  const isButtonDisabled = files.length === 0 || priceErr;

  const handleFileChange = (selectedFiles) => {
    setFiles([...selectedFiles]);
  };

  const handleUpload = async () => {
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }

    if (files.length > 0 && user?.email) {
      setLoading(true);
      try {
        const uploadPromises = files.map(async (file) => {
          const uniqueId = uuidv4();
          const storageRef = ref(storage, `uploads/${user.uid}/${uniqueId}`);
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);

          const payload = {
            userId: user.uid,
            userEmail: user.email,
            fileUrl: downloadURL,
            price: parseFloat(textInput),
            status: "in review",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };

          console.log("Payload:", payload); // Log the payload

          await setDoc(doc(collection(db, "submissions"), uniqueId), payload);
        });

        await Promise.all(uploadPromises);
        setLoading(false);
        setFileUploaded(true);
      } catch (error) {
        setLoading(false);
        setError("Upload failed: " + error.message);
        console.error("Error uploading file: ", error);
      }
    }
  };

  return (
    <div id="sellPage-1st-div">
      <div
        style={{
          width: "100%",
          display: "block",
          height: "3em",
          background: "transparent",
        }}
      ></div>
      <div className="sell-page-container">
        <div className="sell-page-header">
          <h1 id="sellPage-header">SELL AT YOUR PRICE</h1>
          <h1 id="sellPage-header-1">SELL</h1>
          <h1 id="sellPage-header-2">AT YOUR</h1>
          <h1 id="sellPage-header-3">OWN PRICE</h1>
        </div>

        <div className="img-upload-parent-box">
          <div className="img-upload-div-child1">
            <h3 className="img-upload-div-child1-h3">
              Showcase your best piece
            </h3>
            <div className="upload-instructions">
              <h3>Steps to upload</h3>
              <ul>
                <li>Select your clear art image.</li>
                <li>Set suitable price for the piece.</li>
                <li>Hit upload.</li>
                <li>Woosh, u did it!.</li>
              </ul>
            </div>
          </div>

          <div className="imgUpload-section">
            <div className="img-selection">
              <FileUpload onFilesSelected={handleFileChange} />
            </div>
            {/* <div id="div-price-input-upload-btn"> */}
            <div className="price-input">
              <input
                id="price-input-for-sell"
                type="number"
                value={textInput}
                onChange={(e) => {
                  const value = e.target.value;
                  const isNumber = !isNaN(value) && value !== "";
                  const isValidPrice = isNumber && parseFloat(value) >= 10;
                  setPriceErr(!isValidPrice);
                  setTextInput(value);
                }}
                placeholder="Enter sell price"
              />

              {/* </div> */}

              <div
                id="btn_upload_file-parent"
                onClick={handleUpload}
                disabled={isButtonDisabled || loading}
                style={{ pointerEvents: isButtonDisabled ? "none" : "auto" }}
              >
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <span
                    id="btn_upload_file"
                    className="material-symbols-outlined"
                  >
                    arrow_outward
                  </span>
                )}
              </div>
            </div>{" "}
            {priceErr && (
              <p id="invalid-sell-price-err">
                {" "}
                <i
                  className="fa-solid fa-circle-exclamation"
                  style={{
                    color: "rgb(223, 77, 77)",
                    fontSize: "11px",
                    marginRight: "3px",
                  }}
                ></i>
                Price should be 10 or more!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
