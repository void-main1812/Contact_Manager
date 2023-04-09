// Imports: Dependencies
const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

// Routes
const app = express();
const port = process.env.PORT || 8081;      //if port is not defined in .env file, use 8081

// API
app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes.js"));
app.use(errorHandler);

// Server: Start
app.listen(port, () => console.log(`Listening on port ${port}`));