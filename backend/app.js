const express = require("express");
const bodyParser = require("body-parser");

const profRouter = require("./routes/prof");
const app = express();

const port = 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Allow-Control-Allow-Origin", "*");
  next();
});

app.use("/professional", profRouter);

app.listen(port);
console.log(`Listening on port ${port}`);
