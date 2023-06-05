require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const artworkRoutes = require("./routes/artworkRoutes");

const app = express();
// Middleware
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/artworks", artworkRoutes);


// Variables

const port = process.env.PORT || 3001;


// Connect to the databases
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the application on database connection failure
  }
  console.log("Connected to the database!");

  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
