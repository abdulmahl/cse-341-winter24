const { MongoClient } = require("mongodb");
const mongodb = require("./db.connect")
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use("/", routes);

app.listen(port);
console.log(`Web server is listening at port: ${port}`);
