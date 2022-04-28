/** @format */

const Movies = require("../models/movie.model");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movies(req.body);
    try {
      const saved = await newMovie.save();
      if (saved) return res.status(200).send(saved);
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  } else {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

const update = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const data = await Movies.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      if (data) return res.status(201).send(data);
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  } else {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

const delet = async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    if (movie) return res.status(201).send(movie);
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

const get = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movies.findByIdAndDelete(req.params.id);
      return res.status(201).send({ msg: "movie deleted" });
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  }
};
//RANDOM
const getRandom = async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type == "series") {
      movie = await Movies.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movies.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    await Movies.findByIdAndDelete(req.params.id);
    return res.status(201).send({ msg: "movie deleted" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = { create, update, delet, getRandom, get };
