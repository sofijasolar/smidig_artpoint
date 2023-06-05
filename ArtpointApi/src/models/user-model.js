const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  database: "artpointdb",
  username: "sofijapetra",
  password: process.env.DB_PASSWORD,
  host: "artpointdb.cvvnzrqzsx1c.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

// Database config iptions

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(20),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(50),
  },
}, {
    tableName: 'users', // Specify the table name as 'users'
    timestamps: false, // Disable automatic timestamp fields
  });

module.exports = User;
