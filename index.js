const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port);
console.log(`Listening at port: ${port}`);
