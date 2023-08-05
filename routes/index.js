var express = require("express");
var router = express.Router();
const UserModel = require("./userModel");

/* GET home */

router.get("/", function (req, res, next) {
  res.render("homepage", { title: "Ruchit", age: "22", gf: "null" });
});

/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("register");
});

/* post register user. */
router.post("/register", function (req, res, next) {
  // console.log(req.body.name);
  // console.log(req.body.age);

  UserModel.create(req.body).then(function (createUser) {
    res.json(createUser);
  });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/login", function (req, res, next) {
  // apan phele khoj rahe hai on the basics of some unique value
  // might be username or Phone num or aadhar card num

  UserModel.findOne({ name: req.body.name }).then(function (user) {
    // ab apan uska password mila ke check krkenge ki
    // db me jo save haiuser kyauska password milraha hai abhi jo form me fill kiya hai usse

    // check if password from form  === pass saved in db
    if (req.body.age == user.age) {
      res.render("profile", { user });
    } else {
      console.log(user, typeof(req.body.age))
      res.json("bhag yaha se kudh ka age yad nahi hai");
    }
  });
});

module.exports = router;
