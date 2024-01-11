require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

let _db;
const initDB = (callback) => {
  if (_db) {
    console.log("DB already initialized...");
    return callback(null, _db);
  }
  MongoClient
    .connect(process.env.MONGO_URI)
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
    throw Error("DB not initialized");
  } else {
    return _db;
  }
};

module.exports = { initDB, getDB };