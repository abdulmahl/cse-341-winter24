require("dotenv").config();
const uri = process.env.MONGO_URI;
const { MongoClient } = require("mongodb");
const user = new MongoClient(uri);

let _db;

const initDB = (callback) => {
  if (_db) {
    console.log("Db is already initialized!");
    return callback(null, _db);
  }
  user
    .connect(uri)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDB = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};

module.exports = {
  initDB,
  getDB,
};
