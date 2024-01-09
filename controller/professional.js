const mongodb = require("../database/connect");

const getData = async (req, res, next) => {
  const result = await mongodb.getDB().collection("user").find();
  result.toArray().then((list) => {
    res.serHeader("Content-type", "application/json");
    res.status(200).json(list[0]);
  });
};

module.exports = getData;
