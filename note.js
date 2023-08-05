let user =  UserModel.findOne({ name: req.body.name });

// ______________________ ye mengha wala hai ______________________
if (!user) res.json("naam galat dale ho bhaya");
if (req.body.age != user.age) res.json("age galat dala hai bhaya");
res.render("profile", { name: user.name, age: user.age });

// ______________________ ye sasta wala hai ______________________

if(user){
  if(user.age === req.body.age){
    res.render("profile", { name: user.name, age: user.age });
  }
}
