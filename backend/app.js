const express = require("express");
const app = express();
const route = require("./routes/prof");
const mongodb = require("./database/connection");

const port = process.env.PORT || 8080;

app.use("/professional", route);
app.listen(port);

mongodb.initDB((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`DB connected and listening on port ${port}`);
  }
});
