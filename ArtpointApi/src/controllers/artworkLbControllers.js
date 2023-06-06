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

// insert new entry into leaderboard
exports.insertArtworkEntry = async (req, res) => {
    try {
        const { artworkId, likesCount } = req.body;
    
  
      const artworkEntry = await ArtworkLeaderboard.create({  });
      res.status(201).json(artworkEntry);
    } catch (error) {
      res.status(500).json({ error: "Failed to insert artwork into leaderboard" });
    }
  };