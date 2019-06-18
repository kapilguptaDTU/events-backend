const express  = require('express'),
      passport = require('passport'),
      User     = require('../../models/user'),
      router   = express.Router();
      
//routes

//show form
router.get('/', (req,res) => res.render("form_user_login"));

//handling user sign up
router.post("/register", function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, User){
        if(err){
            res.send(err);
        }else{
            passport.authenticate("local")(req,res,function(){
                res.status(200).json({message : "successful signup" })
            });
        }
    });
});

//login logic
router.post("/login",passport.authenticate("local",{
    //successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true
}) ,function(req,res){
    res.status(200).json({message : "success" })
});


module.exports = router;