import React, { useState } from 'react';
import { Box } from '@mui/material';  // <-- Add this import
import Navbar from './Navbar';
import Banner from './Banner';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import FancyLoginPage from './FancyLoginpage';
import FancySignupPage from './FancySignupage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Function to handle the login click and show login page
  const handleLoginClick = () => {
    setCurrentPage("login");
  };

  // Function to handle the signup click and show signup page
  const handleSignupClick = () => {
    setCurrentPage("signup");
  };

  // Function to reset to the home page view
  const handleHomeClick = () => {
    setCurrentPage("home");
  };

  // Function to handle About Us page
  const handleAboutUsClick = () => {
    setCurrentPage("aboutUs");
  };

  // Function to handle Contact Us page
  const handleContactUsClick = () => {
    setCurrentPage("contactUs");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onHomeClick={handleHomeClick}
        onAboutUsClick={handleAboutUsClick}
        onContactUsClick={handleContactUsClick}
      />
      
      <Box sx={{ flexGrow: 1, paddingBottom: "100px" }}> {/* Added padding to the content area */}
        {currentPage === "login" ? <FancyLoginPage /> : 
         currentPage === "signup" ? <FancySignupPage /> : 
         currentPage === "contactUs" ? <ContactUs /> : 
         currentPage === "aboutUs" ? <AboutUs /> : (
           <>
             <Banner />
             <ProductGrid />
           </>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
