require('dotenv').config();
const express = require('express');
const db = require('./config/db');


const app = express();

// Middleware
app.use(express.json());

// Connect to the databases
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the application on database connection failure
  }
  console.log('Connected to the database!');

  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  

});
