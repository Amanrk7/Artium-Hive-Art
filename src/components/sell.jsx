import React, { useState, useRef, useEffect } from "react";
import { getDownloadURL } from "firebase/storage";
import { storage, ref, uploadBytes } from "../firebase/firebase";
import emailjs from "emailjs-com";
import { auth, db, setDoc, doc } from "../firebase/firebase";

export const SellPage = () => {
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [user, setUser] = useState(null); // Add user state
  const [priceErr, setPriceErr] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Add state for button

  const targetRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the authenticated user
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Check if all conditions are met to enable the button
    const isNumber = !isNaN(textInput) && textInput !== "";
    const isValidPrice = isNumber && parseFloat(textInput) >= 10;
    setIsButtonDisabled(!(files.length > 0 && isValidPrice));
  }, [textInput, files]);

  const correctFileType = (file) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    return file && allowedTypes.includes(file.type);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];
    const urls = [];
    let errorMessages = [];

    selectedFiles.forEach((file) => {
      if (correctFileType(file)) {
        validFiles.push(file);
        const url = URL.createObjectURL(file);
        urls.push(url);
      } else {
        errorMessages.push(
          "Invalid file type. Please upload a PDF, JPG, or PNG file."
        );
      }
    });

    setFiles(validFiles);
    setPreviewUrls(urls);
    if (errorMessages.length > 0) {
      setError(errorMessages.join(" "));
      e.target.value = "";
    } else {
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (files.length > 0 && user) {
      setLoading(true);
      try {
        const uploadPromises = files.map(async (file) => {
          const storageRef = ref(storage, `uploads/${user.email}/${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);

          await setDoc(doc(db, "uploads", file.name), {
            userId: user.uid,
            fileName: file.name,
            fileUrl: downloadURL,
            uploadedAt: new Date(),
            textInput: textInput,
          });

          sendEmail(downloadURL);
        });
        await Promise.all(uploadPromises);
        setLoading(false);
        setFileUploaded(true);
        setTimeout(() => {
          setFileUploaded(false);
          setInputSubmitted(false);
        }, 7000);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error uploading file: ", error);
      }
    }
  };

  const sendEmail = (downloadURL) => {
    const templateParams = {
      to_email: "amanrk00112@gmail.com",
      attachment: downloadURL,
    };
    emailjs
      .send(
        "service_40ncdqw",
        "template_u03b01e",
        templateParams,
        "Qx6jX1aoOdXJXq4BM"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "block",
          height: "3em",
          background: "transparent",
          transition: "3s ease-in",
        }}
      ></div>

      <div
        ref={targetRef}
        style={{
          color: "black",
          // backgroundColor: "#e7e7e7",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
          transition: ".7s ease-in",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <h1 id="sellPage-header" style={{}}>
            {" "}
            SELL AT YOUR PRICE
          </h1>

          <div id="sellPage-header-hidden-mobile">
            <div>
              <h1 style={{ fontSize: "34px" }}>SELL</h1>
            </div>
            <div>
              <h1 style={{ fontSize: "40px" }}>AT YOUR</h1>
            </div>
            <div>
              <h1 style={{ fontSize: "46px" }}>OWN PRICE</h1>
            </div>
          </div>
        </div>

        <div className="img-upload-parent-box">
          <div className="img-upload-div-child1">
            <h3
              style={{
                paddingLeft: "7px",
                paddingBottom: "27px",
                fontFamily: "Phonk Contrast DEMO",
                width: "100%",
              }}
            >
              Showcase your best piece
            </h3>
            <div style={{ width: "100%", paddingLeft: "7px" }}>
              <div className="upload-img-div-rules-header">
                <h3>Steps to upload</h3>
              </div>
              <div className="upload-img-div-rules">
                <ul>
                  <li>Select your clear art image.</li>
                  <li>Set suitable price for the piece.</li>
                  <li>Hit upload.</li>
                  <li>Woosh, u did it!.</li>
                </ul>
              </div>
            </div>
            {/* <span
              id="upload_btn_info_toggle"
              style={{
                paddingBottom: "30px",
                fontFamily: "circular",
              }}
            >
              <i
                id="upload_btn_info_toggle_i"
                class="fa-solid fa-info"
                style={{
                  fontSize: "11px",
                  padding: "7px",
                  borderRadius: "57%",
                }}
              ></i>
            </span> */}
          </div>
          {/* --img upload------ */}
          <div className="imgUpload-section">
            <div className="img-selection" style={{ width: "45%" }}>
              <input
                type="file"
                onChange={handleFileChange}
                style={{
                  background: "transparent",
                  border: "0",
                  color: "#615e5e",
                  fontWeight: "900",
                  fontFamily: "circular",
                  letterSpacing: " .3px",
                }}
              />
            </div>
            <div className="price-input" style={{ width: "45%" }}>
              <input
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
                style={{
                  height: "3em",
                  background: "rgb(255 255 255 / 0%)",
                  border: "0.9px solid rgb(195, 195, 195)",
                  color: "#615e5e",
                  fontWeight: "900",
                  fontFamily: "circular",
                  letterSpacing: " .3px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
              {priceErr && (
                <p
                  style={{
                    color: " #df4d4d",
                    fontFamily: "circular",
                    transition: ".9s ease-in-out",
                  }}
                >
                  Price should be 10 or more!
                </p>
              )}
            </div>

            <div
              id="btn_upload_file-parent"
              onClick={handleUpload}
              disabled={isButtonDisabled || loading} // Updated to include isButtonDisabled
              style={{
                pointerEvents: isButtonDisabled ? "none" : "auto",
              }}
            >
              {loading ? (
                <div className="loader"></div>
              ) : (
                <span
                  id="btn_upload_file"
                  class="material-symbols-outlined hover:white"
                  style={{
                    backgroundColor: isButtonDisabled ? "#b19f63" : "#ffdd6a",
                    color: isButtonDisabled ? "#856a6a" : "#000000",
                    transition: ".3s ease-in",
                  }}
                >
                  arrow_outward
                </span>
              )}
            </div>
          </div>{" "}
          {fileUploaded && <p style={{ color: "green" }}>Success</p>}
          {error && (
            <p
              style={{
                color: " #df4d4d",
                fontFamily: "circular",
                transition: ".9s ease-in-out",
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>

      {/* -----recent-uploads--------- */}
      <div>
        {" "}
        <div>
          {" "}
          <h3>Your uploads</h3>{" "}
        </div>{" "}
        <div>
          {" "}
          {previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Uploaded file ${index + 1}`}
              style={{ maxWidth: "100%", maxHeight: "300px", margin: "10px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
