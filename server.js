const routes = require("./routes/index");

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use("/", routes);

app.listen(port);
console.log(`Listening at port: ${port}`);
