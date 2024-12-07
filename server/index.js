const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('../Routes/AuthRouter');
require('dotenv').config();
require('../Models/db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: ['https://button-store-verg.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.get("/", (req, res) => {
  res.json("Successfully deployed Server");
});

app.use('/api/auth', AuthRouter);

// Export the serverless function
module.exports = (req, res) => {
  app.handle(req, res); // Use express's handle method instead of invoking app(req, res)
};
