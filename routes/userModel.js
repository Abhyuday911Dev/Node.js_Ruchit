const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("user", user);

module.exports = User;
