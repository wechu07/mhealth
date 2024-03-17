const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// if you wish to develop offline, pass 'mongodb://localhost:27017/dbName' instead
// of process.env.DB_URL

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      connectTimeoutMS: 10000, // Wait 10 seconds to establish a connection
      socketTimeoutMS: 45000, // Wait 45 seconds for responses from the server
    });
    console.log(`Database connected: ${db.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
