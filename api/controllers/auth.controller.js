/** @format */

const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    console.log(newUser);
    if (newUser)
      return res.status(201).send({ msg: "Signup successful", newUser });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = register;
