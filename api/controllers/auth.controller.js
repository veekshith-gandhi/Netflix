/** @format */

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//to genrate token bu userd id and email
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    // console.log(user);
    if (user?.username == req.body.username) {
      return res.status(401).send({ msg: "user already existed" });
    } else if (user?.email == req.body.email)
      return res.status(401).send({ msg: "email already existed" });
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error });
  }

  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    if (newUser)
      return res.status(201).send({ msg: "Signup successful", newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

const login = async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      email: req.body.email,
    });

    if (!user) return res.status(401).send({ msg: "user not found" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }

  let isMatch;
  try {
    //filtered user
    isMatch = await user.comparePassword(req.body.password);
    if (!isMatch)
      return res.status(401).send({ msg: "invalid email or password" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }

  const token = generateToken(user);
  return res.status(200).json({ token, id: user._id, email: user.email });
};

module.exports = { register, login };
