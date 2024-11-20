import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2874f0',
        color: 'white',
        padding: '40px 0',
        marginTop: 'auto', // This ensures it sticks to the bottom of the page if needed
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 - Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              HAFIZI BUTTON STORE
            </Typography>
            <Typography variant="body2">
              Your go-to store for high-quality buttons and accessories.
            </Typography>
          </Grid>

          {/* Column 2 - Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: 1 }}>
                Home
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: 1 }}>
                About Us
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: 1 }}>
                Contact Us
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block' }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Column 3 - Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: 'white', marginRight: 2 }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: 'white', marginRight: 2 }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: 'white', marginRight: 2 }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: 'white' }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 4 - Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2">Email: support@hafizibutton.com</Typography>
            <Typography variant="body2">Phone: +91-8010419668</Typography>
          </Grid>
        </Grid>

        {/* Bottom copyright */}
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="body2">
            © 2024 Hafizi Button Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
