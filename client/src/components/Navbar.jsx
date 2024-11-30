import React from "react";
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from "@mui/material";

const Navbar = ({ onLoginClick, onSignupClick, onHomeClick, onAboutUsClick, onContactUsClick }) => {
  const isMobile = useMediaQuery("(max-width:500px)"); // Detect if screen size is mobile

  const handleNavClick = (item) => {
    if (item === "Home") {
      onHomeClick(); // Reset to home page
    } else if (item === "Contact Us") {
      onContactUsClick(); // Navigate to Contact Us page
    } else if (item === "Login") {
      onLoginClick();
    } else if (item === "Signup") {
      onSignupClick();
    } else if (item === "About Us") {
      onAboutUsClick(); // Show About Us page
    }
    // Handle other navigation items if needed
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2874f0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left-aligned title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "yellow",
            marginRight: 4, // Adds spacing between title and links
          }}
        >
          HAFIZI BUTTON STORE
        </Typography>

        {/* Right-aligned navigation items */}
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: isMobile ? "center" : "flex-end", // Center on mobile, right-aligned on larger screens
            flexDirection: isMobile ? "column" : "row", // Stack items on mobile, horizontal on larger screens
            alignItems: "center",
            gap: isMobile ? "10px" : "20px", // Add spacing between items
          }}
        >
          {["Home", "Contact Us", "About Us", "Login", "Signup"].map((item, index) => (
            <Typography
              key={index}
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
