import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { Container } from "./components/Container";
// import { ArtDetails } from "./components/ArtDetails";
// import "./fanta.css";
import { PageNavigation } from "./components/pageNavigation";
// import { BuyPage } from "./components/buy";
import { SellPage } from "./components/sell";
// import { SupportPage } from "./components/support";
// import { AboutPage } from "./components/about";
import { Footer } from "./components/Footer";
import SignIn from "./components/signIn";
import Profile from "./components/profile";
import { auth } from "./firebase/firebase";
import "./css/fanta.css";
const App = () => {
  const [user, setUser] = useState(false);
  console.log("Environment Variables:", import.meta.env);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = (signedInUser) => {
    setUser(signedInUser);
  };

  const AppContent = () => (
    <>
      <PageNavigation />
      <div id="appHeaderBack">
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/buy" element={<Container />} />
          <Route path="/profile" element={<Profile user={user} />} />
          {/* <Route path="/art/:slug" element={<ArtDetails />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/userLogin" element={<SignIn />} />*/}
        </Routes>
      </div>
      <Footer />
    </>
  );

  return <Router>{user ? <AppContent /> : <SignIn />}</Router>;
};

export default App;
