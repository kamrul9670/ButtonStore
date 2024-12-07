const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
require('dotenv').config();
require('./Models/db');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors({
  origin: ['https://button-store-verg.vercel.app'], // Remove trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Ensure cookies/sessions can be sent
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get("/", (req, res) => {
  res.json("Successfully deployed server");
});

app.use('/api/auth', AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
