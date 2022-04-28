/** @format */

const User = require("../models/user.model");
const bcrypt = require("bcrypt");

//UPDATE
const update = async (req, res) => {
  console.log(req.user.id, req.params, req.user.isAdmin);
  if (req.user.id !== req.params.id || req.user.isAdmin)
    return res.status(401).send({ msg: "user not authenticated", error });

  try {
    if (req.body.password) {
      let password = req.body.password;

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      // console.log(hashed);

      req.body.password = hashed;
    }
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }

  try {
    const updated = await User.findByIdAndUpdate(
      { _id: req.user.id },
      { $set: req.body },
      { new: true }
    );

    if (update) return res.status(200).send({ msg: "updated", updated });
    return res.status(401).send({ msg: "Not updated" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

// DELETE
const delet = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      const data = await User.findByIdAndDelete(req.params.id);
      if (data) return res.status(201).send({ msg: "user deleted" });
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  } else {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

//GET
const get = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (data) {
      //you will hide credentials by destructuring
      const { password, ...info } = data._doc;
      return res.status(201).send({ info });
    }
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

//ALL USER IF YOUR ADMIN
const getALl = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await User.find({});
      if (data) {
        return res.status(201).send(data);
      }
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  } else {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};
module.exports = { update, delet, get, getALl };
