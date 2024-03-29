const mongodb = require("../database/connection");

const getData = async (req, res, next) => {
  const result = await mongodb.getDB().db().collection("user").find();
  result.toArray().then((lists) => {
    res.status(200).json(lists[0]);
  });
};

module.exports = { getData };