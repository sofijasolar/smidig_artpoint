const express = require("express");
const artworkController = require("../controllers/artworkControllers");

const router = express.Router();

// Create a new user

router.post("/", artworkController.createArtwork);

// Get all users
router.get("/", artworkController.getArtwork);

module.exports = router;
