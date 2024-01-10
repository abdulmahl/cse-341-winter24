const express = require("express");
const bodyParser = require("body-parser");

const profRouter = require("../backend/routes/prof");
const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Allow-Control-Allow-Origin", "*");
  next();
});

app.use("/professional", profRouter);
const port = 8080;
app.listen(port);
// console.log(`Listening on port ${port}`);
