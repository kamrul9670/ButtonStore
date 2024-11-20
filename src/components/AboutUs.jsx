import React from "react";
import { Container, Paper, Typography, Grid, Box, List, ListItem, ListItemText } from "@mui/material";

const AboutUs = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      {/* Heading Section */}
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4 }}>
        About Us
      </Typography>

      {/* Shop Details Section */}
      <Paper sx={{ padding: 4, backgroundColor: "rgba(255, 255, 255, 0.9)", boxShadow: 3 }}>
        <Grid container spacing={4}>
          {/* Left Column - Shop Info */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Shop Owner: <span style={{ fontWeight: "normal" }}>Sadruddin</span>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              Opening Year: <span style={{ fontWeight: "normal" }}>2023</span>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              Location: <span style={{ fontWeight: "normal" }}>
                Lar Bazar, Mukesh Complex near HDFC Bank
              </span>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              Wholesale Rates Available
            </Typography>
          </Grid>

          {/* Right Column - Products List */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Products Offered:
            </Typography>
            <List sx={{ marginTop: 2 }}>
              {[
                "Thread",
                "Needles",
                "Sewing Machine",
                "Fall",
                "Astar",
                "Machine Oil",
                "And more...",
              ].map((product, index) => (
                <ListItem key={index}>
                  <ListItemText primary={product} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>

      {/* Additional Information Section */}
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Why Choose Us?
        </Typography>
        <Typography sx={{ fontSize: "18px", lineHeight: "1.6" }}>
          At Hafizi Button Store, we provide high-quality sewing products at competitive wholesale rates. We
          have been serving the local community since 2023 and aim to make your sewing experience smooth and
          enjoyable. Whether you are a professional or a hobbyist, we have the products you need.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
