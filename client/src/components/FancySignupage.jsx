import React, { useState } from "react";
import { Typography, TextField, Button, Container, Paper } from "@mui/material";
import { signupUser } from "../services/authService"; 

const FancySignupPage = ({ setCurrentPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await signupUser({ name, email, password });
      alert(response.message || "Signup successful!");

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Redirect to login page
      setCurrentPage("login");
    } catch (error) {
      alert(error.message || "Signup failed. Please try again.");
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
          Create Your Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%", padding: "10px" }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FancySignupPage;
