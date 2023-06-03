const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Artwork = sequelize.define('Artwork', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(20)
  },
  imageURL: {
    type: DataTypes.STRING(255)
  },
  artist: {
    type: DataTypes.STRING(20),
    references: {
      model: User,
      key: 'username'
    }
  }
});

module.exports = Artwork;
