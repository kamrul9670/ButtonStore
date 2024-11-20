import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Pagination } from "@mui/material";

// Import images
import productImage1 from "../image/product1.jpg"; // Adjust the path accordingly
import productImage2 from "../image/product2.jpg";
import productImage3 from "../image/product3.jpg";
import productImage4 from "../image/product4.jpg";
import productImage5 from "../image/product5.jpg";
import productImage6 from "../image/product6.jpeg";
import productImage7 from "../image/product7.jpg";
import productImage8 from "../image/product8.jpg";
// Add other image imports as needed

const products = [
  { id: 1, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 2, title: "Sewing Machine", description: " Choti Machine Usha Brand", image: productImage2 },
  { id: 3, title: "Button", description: "This is a button", image: productImage3 },
  { id: 4, title: "Astar cloth", description: " fabric material", image: productImage4 },
  { id: 5, title: "Machine Oil", description: " good for machinery services", image: productImage5 },
  { id: 6, title: "Zipper", description: "This is use in pants", image: productImage6 },
  { id: 7, title: "Moon Thread", description: "Uses in Sweing clothes", image: productImage7 },
  { id: 8, title: "Hooks", description: "Sewing hook", image: productImage8 },
  { id: 9, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 10, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 11, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 12, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 13, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 14, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 15, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 16, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 17, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 18, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 19, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 20, title: "Needles", description: "This is a needle", image: productImage1 },
 
  // Add more products as needed
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Paginate the products
  const startIndex = (currentPage - 1) * productsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
     
    <Box sx={{ padding: 3 }}>
         <h1 style={{ textAlign: 'center', 

         }}>Products</h1>

      <Grid container spacing={3}>
        {selectedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="300"
              
                image={product.image} // Use the imported image
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ProductGrid;
