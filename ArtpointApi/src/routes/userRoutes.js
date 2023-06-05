const express = require("express");
const userController = require("../controllers/userControllers");


const router = express.Router();

// Create a new user

router.post("/", userController.createUser);

// Get all users
router.get("/", userController.getUsers);

// Get a user by username
router.get("/:username", userController.getUserByUsername);

// Get a user and its artworks
router.get("/:username/artworks", userController.getArtworksByUser);

module.exports = router;
