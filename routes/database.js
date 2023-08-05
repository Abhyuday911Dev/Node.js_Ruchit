const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pp")
  .then(console.log("db connected bhaya"))
  .catch((error) => {
    console.log(error);
  });
