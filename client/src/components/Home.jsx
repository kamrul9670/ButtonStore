// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';  
import Navbar from './Navbar';
import Banner from './Banner';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import FancyLoginPage from './FancyLoginpage';
import FancySignupPage from './FancySignupage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Introduction from './Introduction';

import Photos from './Photos';


const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
   
      const storedUserName = localStorage.getItem("userName");
      setUserName(storedUserName || "User");
    }
  }, []);

  const handleLoginClick = () => {
    setCurrentPage("login");
  };

  const handleSignupClick = () => {
    setCurrentPage("signup");
  };

  const handleAboutUsClick = () => {
    setCurrentPage("aboutUs");
  };

  const handleContactUsClick = () => {
    setCurrentPage("contactUs");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onAboutUsClick={handleAboutUsClick}
        onContactUsClick={handleContactUsClick}
        onLogout={handleLogout} // Pass logout function to Navbar
      />
      
      <Box sx={{ flexGrow: 1, paddingBottom: "100px" }}>
        {/* Render the correct component based on the currentPage state */}
        {currentPage === "login" ? <FancyLoginPage 
         setIsLoggedIn={setIsLoggedIn} 
        setUserName={setUserName} 
        setCurrentPage={setCurrentPage} 
     /> : 
         currentPage === "signup" ? <FancySignupPage setCurrentPage={setCurrentPage}  /> : 
         currentPage === "contactUs" ? <ContactUs /> : 
         currentPage === "aboutUs" ? <AboutUs /> : (
           <>
             <Banner />
             <Introduction />
             <ProductGrid />
            
           </>
        )}

      </Box>
      
       {/* Only render Photos if the currentPage is not "login" or "signup" */}
       {(currentPage !== "login" && currentPage !== "signup") && <Photos />}


      <Footer />
    </Box>
  );
};

export default Home;
