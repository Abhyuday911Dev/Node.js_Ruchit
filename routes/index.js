var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("homepage", { title: "Ruchit", age: "22", gf: "null" });
});

router.get("/", function (req, res, next) {
  res.render("homepage", { title: "Ruchit", age: "22", gf: "null" });
});

module.exports = router;
