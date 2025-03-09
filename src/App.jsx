import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { PageNavigation } from "./components/pageNavigation";
import { SellPage } from "./components/sell";
import { SupportPage } from "./components/support";
import { AboutPage } from "./components/about";
import { Footer } from "./components/Footer";
import SignIn from "./components/signIn";
import Profile from "./components/profile";
import { auth } from "./firebase/firebase";
import "./css/fanta.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./GlobalContext/AuthContext";
import { PrivacyPolicy } from "./components/privacyPolicy";
import { RefundPolicy } from "./components/refundPolicy";
import ContactUs from "./components/contactUs";
import { ConditionsTermsPage } from "./components/tNc";

const AppContent = ({ user }) => (
  <>
    <PageNavigation />
    <div id="appHeaderBack">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <SellPage />
            </ProtectedRoute>
          }
        />
        <Route path="/buy" element={<Container />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/logIn" element={<SignIn />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/termsAndCondition" element={<ConditionsTermsPage />} />
      </Routes>
    </div>
    <Footer />
  </>
);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <AppContent user={user} />
      </Router>
    </AuthProvider>
  );
};

export default App;
