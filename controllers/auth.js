const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");


exports.getSignup = (req, res) => {
    if (req.user) {
      return res.redirect("/profile");
    }
    res.render("signup", {
      title: "Create Account",
    });
  };

  exports.postSignup = (req, res, next) => {
    // const validationErrors = [];
    // if (!validator.isEmail(req.body.email))
    //   validationErrors.push({ msg: "Please enter a valid email address." });
    // if (!validator.isLength(req.body.password, { min: 8 }))
    //   validationErrors.push({
    //     msg: "Password must be at least 8 characters long",
    //   });
    // if (req.body.password !== req.body.confirmPassword)
    //   validationErrors.push({ msg: "Passwords do not match" });
  
    // if (validationErrors.length) {
    // //   req.flash("errors", validationErrors);
    //     console.log(validationErrors)
    //   return res.redirect("../signup");
    // }
    // req.body.email = validator.normalizeEmail(req.body.email, {
    //   gmail_remove_dots: false,
    // });
   
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
  };
  