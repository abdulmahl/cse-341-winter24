const express = require("express");

const professional = require("../controllers/prof");

const router = express.Router();

router.get("/", professional.getData);

module.exports = router;
