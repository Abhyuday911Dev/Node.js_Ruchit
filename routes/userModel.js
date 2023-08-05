const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("user", user);

module.exports = UserModel;
