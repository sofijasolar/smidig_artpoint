const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  database: "artpointdb",
  username: "sofijapetra",
  password: process.env.DB_PASSWORD,
  host: "artpointdb.cvvnzrqzsx1c.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

const User = require("./user-model");

const Artwork = sequelize.define(
  "artwork",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(20),
    },
    imageURL: {
      type: DataTypes.STRING(255),
    },

    likesCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    artist: {
      type: DataTypes.STRING(20),
      references: {
        model: User,
        key: "username",
      },
    },
  },
  {
    tableName: "artworks", // Specify the table name as 'users'
    timestamps: false, // Disable automatic timestamp fields
  }
);

module.exports = Artwork;
