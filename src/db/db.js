const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log(process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { connectDB };
