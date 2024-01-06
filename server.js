// express web server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Nodemon Dews");
});

app.get("/hannah", (req, res) => {
  res.send("Hannah Dews");
});

const port = 3000

app.listen(process.env.port || port);
console.log(`Web server is listening at port ${(process.env.port || port)}`);
