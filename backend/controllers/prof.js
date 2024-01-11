const mongoose = require("../database/connection");

const getData = async (req, res, next) => {
  const result = await mongoose.getDB().db().collection("user").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

module.exports = { getData };