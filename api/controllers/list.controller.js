/** @format */

const List = require("../models/list.model");

const create = async (req, res) => {
  if (req.user.isAdmin) {
    const newLists = new List(req.body);
    try {
      const saved = await newLists.save();
      if (saved) return res.status(200).send(saved);
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  } else {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

const dele = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.body.id);
      return res.status(200).send({ msg: "movie/series deleted" });
    } catch (error) {
      return res.status(500).send({ msg: "Something went wrong", error });
    }
  } else {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};
//random
const get = async (req, res) => {
  //   console.log(req.query);
  const typeQuery = req.query.type;
  const generQuery = req.query.genre;

  let list = [];
  try {
    if (typeQuery) {
      if (generQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: generQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    if (list) return res.status(200).send({ list });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = { create, dele, get };
