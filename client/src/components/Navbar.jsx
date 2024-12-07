import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, useMediaQuery } from "@mui/material";

const Navbar = ({ 
  setCurrentPage, 
  isLoggedIn, 
  userName, 
  onLoginClick, 
  onSignupClick, 
  onAboutUsClick, 
  onContactUsClick, 
  onLogout 
}) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  const handleNavClick = (item) => {
    if (item === "Home") {
      setCurrentPage("home");  // Use the passed setCurrentPage function to update the page
    } else if (item === "Contact Us") {
      onContactUsClick();
    } else if (item === "Login") {
      onLoginClick();
    } else if (item === "Signup") {
      onSignupClick();
    } else if (item === "About Us") {
      onAboutUsClick();
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2874f0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left-aligned title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "yellow", marginRight: 4 }}>
          HAFIZI BUTTON STORE
        </Typography>

        {/* Right-aligned navigation items */}
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: isMobile ? "center" : "flex-end", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: isMobile ? "10px" : "20px" }}>
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => handleNavClick("Home")}>
            Home
          </Typography>
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => handleNavClick("About Us")}>
            About Us
          </Typography>
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => handleNavClick("Contact Us")}>
            Contact Us
          </Typography>
          {isLoggedIn ? (
            <>
              <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                Welcome, {userName}
              </Typography>
              <Button onClick={onLogout} sx={{ color: "white", fontSize: "16px" }}>Logout</Button>
            </>
          ) : (
            <>
              <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => handleNavClick("Login")}>
                Login
              </Typography>
              <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => handleNavClick("Signup")}>
                Signup
              </Typography>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;