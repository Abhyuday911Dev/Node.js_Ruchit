var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("homepage", { title: "Ruchit", age: "22", gf: "null" });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/login", function (req, res, next) {
  // console.log(req.body.name);
  // console.log(req.body.age);


  // dtabase me kuch checking hui fir user mila ya nahi mila
  user = true;
  // dtabase me kuch checking hui fir user mila ya nahi mila

  if (!user) res.redirect("/login");
  res.render("profile", { name: req.body.name, age: req.body.age });
});

module.exports = router;
