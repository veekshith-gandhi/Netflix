/** @format */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

// decrypting
UserSchema.methods.comparePassword = function (password) {
  //this.password(hashed) coming from filterd user in controller section
  const hashedPassword = this.password;
  return bcrypt.compare(password, hashedPassword);
};

const User = mongoose.model("users", UserSchema);

module.exports = User;
