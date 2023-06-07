const Artwork = require("../models/artwork-model");
const User = require("../models/user-model");
const ArtworkLeaderboard = require("../models/artwork-lb-model");

// Create a new artwork

exports.createArtwork = async (req, res) => {
  try {
    const { title, imageURL, artist } = req.body;

    if (!artist) {
      return res
        .status(400)
        .json({ error: "An artwork has to be posted by an existing user." });
    }
    if (!imageURL) {
      return res.status(400).json({ error: "An image is required" });
    }

    // Check if the artist exists in the users table
    const user = await User.findOne({ where: { username: artist } });
    if (!user) {
      return res.status(400).json({ error: "Invalid artist" });
    }

    const artwork = await Artwork.create({ title, imageURL, artist });

    try {
      // Create the artwork entry in the artworkLeaderboard table
      const artworkEntry = await ArtworkLeaderboard.create({
        artwork_id: artwork.id,
        artwork_likesCount: artwork.likesCount,
      });

      res.status(201).json({ artwork, artworkEntry });
    } catch (error) {
      // Rollback the artwork creation if the leaderboard entry fails
      await artwork.destroy();
      res
        .status(500)
        .json({ error: "Failed to insert artwork into leaderboard" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create artwork" });
  }
};

// Get all artworks

exports.getArtwork = async (req, res) => {
  try {
    const artworks = await Artwork.findAll();
    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
};

// Increment likesCount for an artwork

exports.incrementLikesCount = async (req, res) => {
  try {
    const { artworkId } = req.params;

    // Find the artwork
    const artwork = await Artwork.findByPk(artworkId);

    if (!artwork) {
      return res.status(404).json({ error: "Artwork not found" });
    }

    // Increment the likesCount

    artwork.likesCount += 1;
    await artwork.save();

    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({ error: "Failed to increment likesCount" });
  }
};
