import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // You can handle the form submission (API call, etc.) here
  };

  return (
    <Container sx={{ paddingTop: 5 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {/* Contact Info */}
          <Paper sx={{ padding: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Phone:</strong> +91 8010419668
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Email:</strong> contact@hafizibuttonstore.com
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <strong>Location:</strong> Lar Bazar, Mukesh Complex, near HDFC Bank.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Contact Form */}
          <Paper sx={{ padding: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ marginBottom: 2 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
