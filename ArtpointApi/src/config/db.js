const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'artpointdb.cvvnzrqzsx1c.eu-north-1.rds.amazonaws.com',
  user: 'sofijapetra',
  password: process.env.DB_PASSWORD, 
  database: 'artpointdb'
});

// Get a connection from the pool
const getConnection = (callback) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        callback(err, null);
        return;
      }
  
      console.log('Connected to the database!');
      callback(null, connection);
    });
};
  
// Export the getConnection function
module.exports = {
    getConnection,
};

// Handle errors in case of uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

// Handle errors in case of unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled promise rejection:', reason);
});
