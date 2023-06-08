const ArtworkLeaderboard = require("../models/artwork-lb-model");

// get all entries from artwork leaderboard
exports.getArtworkLeaderboard = async (req, res) => {
  try {
    const leaderboardEntries = await ArtworkLeaderboard.findAll();
    res.status(200).json(leaderboardEntries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch artwork leaderboard" });
  }
};
exports.sortArtworkLeaderboardByLikes = async (req, res) => {
  try {
    const leaderboardEntries = await ArtworkLeaderboard.findAll({
      order: [['artwork_likesCount', 'DESC']] // Sort by likesCount in descending order
    });
    
    res.status(200).json(leaderboardEntries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch artwork leaderboard" });
  }
};

