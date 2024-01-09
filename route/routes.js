//? This is the routes controller
const route = require("express").Router(); //* Router instance
const controller = require("../controller/functions"); //* Import functions

route.get("/", controller.routeOne);
route.get("/two", controller.routeTwo);
route.get("/three", controller.routeThree);

module.exports = route;
