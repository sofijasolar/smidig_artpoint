const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  database: "artpointdb",
  username: "sofijapetra",
  password: process.env.DB_PASSWORD,
  host: "artpointdb.cvvnzrqzsx1c.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

//const User = require("./user-model");
const Artwork = require("./artwork-model");

const ArtworkLeaderboard = sequelize.define(
    "artworkLeaderboard",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      artwork_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Artwork,
          key: "id",
        },
      },
      artwork_likesCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Artwork,
          key: "likesCount",
        },
      },
    },
    {
      tableName: "artworkLeaderboard",
      timestamps: false,
    }
);

module.exports = ArtworkLeaderboard;