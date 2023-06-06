const Artwork = require("../models/artwork-model");

// Create a new user

exports.createArtwork = async (req, res) => {
  try {
    const { title, imageURL, artist } = req.body;
    const artwork = await Artwork.create({ title, imageURL, artist });
    res.status(201).json(artwork);
  } catch (error) {
    res.status(500).json({ error: "Failed to create artwork" });
  }
};

// Get all users

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
