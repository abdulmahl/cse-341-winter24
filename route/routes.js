const route = require("express").Router();
const controller = require("../controller/functions");

route.get("/", controller.routeOne);
route.get("/two", controller.routeTwo);
route.get("/three", controller.routeThree);

module.exports = route;
