import React, { useState } from "react";
import './ProductGrid.css';

import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  TextField,
  IconButton,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Import images
import productImage1 from "../image/product1.jpg";
import productImage2 from "../image/product2.jpg";
import productImage3 from "../image/product3.jpg";
import productImage4 from "../image/product4.jpg";
import productImage5 from "../image/product5.jpg";
import productImage6 from "../image/product6.jpeg";
import productImage7 from "../image/product7.jpg";
import productImage8 from "../image/product8.jpg";

const products = [
  { id: 1, title: "Needles", description: "This is a needle", image: productImage1 },
  { id: 2, title: "Sewing Machine", description: "Choti Machine Usha Brand", image: productImage2 },
  { id: 3, title: "Button", description: "This is a button", image: productImage3 },
  { id: 4, title: "Astar cloth", description: "Fabric material", image: productImage4 },
  { id: 5, title: "Machine Oil", description: "Good for machinery services", image: productImage5 },
  { id: 6, title: "Zipper", description: "This is used in pants", image: productImage6 },
  { id: 7, title: "Moon Thread", description: "Uses in sewing clothes", image: productImage7 },
  { id: 8, title: "Hooks", description: "Sewing hook", image: productImage8 },
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const productsPerPage = 8;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products strictly starting with the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Paginate the filtered products
  const startIndex = (currentPage - 1) * productsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <Box className="main-body" sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
        Products
      </Typography>

      {/* Search Input */}
      <Box className="search-bar">
        <TextField
            variant="outlined"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            sx={{ width: "300px", marginRight: 1 }}
        />
        <IconButton color="primary">
            <SearchIcon />
        </IconButton>
    </Box>

      <Grid container spacing={3}>
        {selectedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
              <button className="btncat">Category Button</button>

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

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ProductGrid;
