const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOODB_URL);
    console.log("Mongoose Connected Successfully");
  } catch (error) {
    console.log("Mongoose Connection Failed ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
