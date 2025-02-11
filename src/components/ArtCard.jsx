import React, { useState, useRef, useEffect } from "react";
import { getDownloadURL } from "firebase/storage";
import { storage, ref, uploadBytes } from "../firebase/firebase";
import emailjs from "emailjs-com";
import { auth, db, setDoc, doc } from "../firebase/firebase";
import LazyLoad from "react-lazyload";

const ArtCard = ({ data }) => {
  const { name, price, image, slug, description } = data;
  const [user, setUser] = useState(null); // Add user state
  const [priceErr, setPriceErr] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the authenticated user
    });
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    if (isHovered) {
      setShowOverlay(!isHovered);
    }
  };
  const handleSentArt = async () => {
    console.log(`sending.... email to ${user.email}`);

    // if (user?.email) {
    //   setLoading(true);
    //   try {
    //     const uploadPromises = files.map(async (file) => {
    //       const storageRef = ref(storage, `uploads/${user.email}/${file.name}`);
    //       const snapshot = await uploadBytes(storageRef, file);
    //       const downloadURL = await getDownloadURL(snapshot.ref);

    //       // Use a unique document ID
    //       await setDoc(doc(db, "uploads", `${user.uid}_${file.name}`), {
    //         userId: user.uid,
    //         fileName: file.name,
    //         fileUrl: downloadURL,
    //         uploadedAt: new Date(),
    //         textInput: textInput,
    //       });

    //     });
    //     sendArtToEmail(downloadURL);
    //     await Promise.all(uploadPromises);
    //     setLoading(false);
    //     setFileUploaded(true);
    //   } catch (error) {
    //     setLoading(false);
    //     setError("Upload failed: " + error.message);
    //     console.error("Error uploading file: ", error);
    //   }
    // }
  };
  // const sendArtToEmail = (downloadURL) => {
  //   const templateParams = {
  //     to_email: `${user.email}`,
  //     attachment: downloadURL,
  //   };
  //   emailjs
  //     .send(
  //       "service_40ncdqw",
  //       "template_u03b01e",
  //       templateParams,
  //       "Qx6jX1aoOdXJXq4BM"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully:", response.status, response.text);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  return (
    <>
      {/* ---------img-art-description------- */}
      <div id="main1-1st-content" style={{ display: "none" }}>
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
              value={textInput}
              onChange={(e) => {
                const value = e.target.value;
                const isNumber = !isNaN(value) && value !== "";
                const isValidPrice = isNumber && parseFloat(value) >= 10;

                setPriceErr(!isValidPrice);
                setTextInput(value);
              }}
              placeholder="price must be more than 10!"
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
          <span
            onClick={handleSentArt}
            id="container_buy_btn"
            className="material-symbols-outlined"
          >
            arrow_outward
          </span>
        </div>
        <span>
          {priceErr && (
            <p
              style={{
                color: " #df4d4d",
                fontFamily: "circular",
                transition: ".9s ease-in-out",
                fontSize: "11px",
                transform: "translateY(-1px)",
              }}
            >
              Price should be 10 or more!
            </p>
          )}
        </span>
      </div>

      {/* ---------img-art------- */}
      {/* <React.Suspense fallback={<>...</>}></React.Suspense> */}
      <LazyLoad
        height={200}
        offset={100}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        placeholder={
          <div
            style={{
              backgroundColor: "rgb(51, 51, 51)",
              width: "100%",
              justifyItems: "center",
              height: "100%",
              color: "white",
              fontFamily: "inherit",
            }}
          >
            Loading...
          </div>
        }
      >
        <div
          id="img_display_art"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
          // onTouchStart={() => setIsHovered(!isHovered)}
          className="image-container"
        >
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
              pointerEvents: "auto",
              // scale: isHovered ? 1.5 : 0
            }}
          />
          {isHovered && (
            <div
              className="hover-overlay"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              Buy Now
            </div>
          )}
        </div>
      </LazyLoad>

      <div className="img-art-desc">
        <div>
          <h3>{name}</h3>
        </div>
        <div>$ {price}</div>
        {/* <div>
          <p>About this piece: {description}</p>
        </div> */}
      </div>
    </>
  );
};

export default ArtCard;
