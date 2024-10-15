const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);