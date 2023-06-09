const express = require("express");
const artworkController = require("../controllers/artworkControllers");

const router = express.Router();

// Create a new user

router.post("/", artworkController.createArtwork);

// Get all users
router.get("/", artworkController.getArtwork);
//get sorted artworks by likes
router.get("/sortedByLikes", artworkController.sortArtworksByLikes);

router.get("/:artworkId", artworkController.getArtworkById);

// Increment likesCount for an artwork
router.patch("/:artworkId/like", artworkController.incrementLikesCount);

module.exports = router;
