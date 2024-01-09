const week1Controller = require("./controllers/index");
const week1Routes = require("./routes/index");

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.get("/", week1Controller.routeOne);
app.get("/two", week1Controller.routeTwo);
app.get("/three", week1Controller.routeThree);

app.listen(port);
console.log(`Listening at port: ${port}`);
