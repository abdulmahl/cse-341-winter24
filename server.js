//? This the main server.
const routes = require("./route/routes"); //* Import routes from the route folder

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use("/", routes);

app.listen(port);
console.log(`Listening at port: ${port}`);
