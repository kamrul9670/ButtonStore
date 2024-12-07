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
  origin: ['https://button-store-verg.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods as needed
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers if needed
}));

      app.get("/" , (req , res) =>  {
        res.json("Sucessfully deploy Server");
      })
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
