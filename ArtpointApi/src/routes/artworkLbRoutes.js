const express = require("express");
const artworkLbController = require("../controllers/artworkLbControllers");

const router = express.Router();

router.get('/', artworkLbController.getArtworkLeaderboard);
router.get('/sortedByLikes', artworkLbController.sortArtworkLeaderboardByLikes);

module.exports = router;