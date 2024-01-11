const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const route = require("./routes/prof");
const mongodb = require("./database/connection");
const MongoClient = require("mongodb").MongoClient;

const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", route);

mongodb.initDB((err, mongodb) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port);
    console.log(`DB connected and listening on port ${port}`);
  }
});

