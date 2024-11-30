import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bannerImage from "../image/banner1.jpg"; // Adjust the relative path to your image

const Banner = () => {
  return (
    <Box
      sx={{
        height: "350px",
        backgroundImage: `url(${bannerImage})`, // Use the imported image
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        width: "80%",
        marginLeft: "10%",
        marginTop : "0.5%",
        backgroundRepeat : "no-repeat",

      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Welcome to Our Shop!
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        Find amazing deals and discounts every day.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          paddingX: 4,
          paddingY: 1,
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default Banner;
