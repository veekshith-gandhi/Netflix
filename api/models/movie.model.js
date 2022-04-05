/** @format */

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgsm: { type: String },
    video: { type: String },
    trailer: { type: String },
    year: { type: String },
    limit: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Movies = mongoose.model("movies", MovieSchema);

module.exports = Movies;
