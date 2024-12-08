import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Container, Paper } from "@mui/material";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const FancyLoginPage = ({ setIsLoggedIn, setUserName, setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      console.log("Token found, redirecting to home...");
      navigate("/"); // Redirect if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {   

      
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);

      // Save JWT to localStorage
      localStorage.setItem("authToken", response.jwtToken);
      localStorage.setItem("userName", response.name);

      // Notify the user and update state
      alert(`Welcome, ${response.name}`);
      setIsLoggedIn(true);
      setUserName(response.name);

      // Update current page to home
      setCurrentPage("home");
    } catch (error) {
      alert(error.message || "Login failed");
    }
  };

  return (
    <Container>
      <Paper
        sx={{
          padding: 4,
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Login to Your Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FancyLoginPage;
