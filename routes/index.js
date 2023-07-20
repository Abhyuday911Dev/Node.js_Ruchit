var express = require("express");
var router = express.Router();
const User = require("./userModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("homepage", { title: "Ruchit", age: "22", gf: "null" });
});

/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("register");
});

/* post register user. */
router.post("/register", async function (req, res, next) {
  // console.log(req.body.name);
  // console.log(req.body.age);

  const createUser = await new User(req.body).save();

  res.json(createUser);
});

router.get("/login", async function (req, res, next) {
  res.render("login");

  // const foundUser=  await User.find({name:"ruchit"})
  // res
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
