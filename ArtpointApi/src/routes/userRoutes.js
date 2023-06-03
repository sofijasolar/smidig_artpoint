const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

// Create a new user

router.post("/users", userController.createUser);

// Get all users
router.get("/users", userController.getUsers);

module.exports = router;
