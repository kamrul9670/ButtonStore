import React, { useState } from "react";
import {  Typography, TextField, Button, Container, Paper } from "@mui/material";

const FancyLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with", email, password);
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
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%", padding: "10px" }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FancyLoginPage;
