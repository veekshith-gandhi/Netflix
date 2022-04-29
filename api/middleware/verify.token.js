/** @format */

const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });
};

const authentication = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    // console.log(authToken);

    if (!authToken) {
      return res.status(401).send({ msg: "token not present " });
    } else {
      //verify user by token
      const token = authToken.split(" ")[1];
      const decode = await verifyToken(token);
      // console.log("decode", decode);
      if (!decode) return res.status(400).json({ msg: "Invalid Token" });

      const user = await User.findById(decode.id);

      if (!user)
        return res.status(400).json({ msg: "User not existed after auth" });
      //authorizing
      req.user = user;
    }
    next();
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = authentication;
