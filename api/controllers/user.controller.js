/** @format */

const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const update = async (req, res) => {
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
      {
        $set: {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        },
      },
      { new: true }
    );

    if (update) return res.status(200).send({ msg: "updated", updated });
    return res.status(401).send({ msg: "Not updated" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};
module.exports = update;
