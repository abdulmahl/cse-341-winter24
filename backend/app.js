const express = require("express");
const bodyParser = require("body-parser");

const professionalRoutes = require("./routes/prof");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());


app.use("/professional", professionalRoutes);

app.listen(port);
console.log(`Listening on port: ${port}`);