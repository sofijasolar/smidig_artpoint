require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const artworkRoutes = require("./routes/artworkRoutes");
const artworkLbRoutes = require("./routes/artworkLbRoutes");
const cors = require('cors');



const app = express();
// Configure CORS
const corsOptions = {
  origin: 'http://localhost:19006', // Replace with your React Native app's domain
  methods: 'GET, POST, PUT, PATCH, DELETE',
  allowedHeaders: 'Content-Type',
};
app.use(cors(corsOptions));
// Middleware
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/artworks", artworkRoutes);
app.use("/api/artwork-leaderboard", artworkLbRoutes);


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
