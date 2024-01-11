const express = require('express');

const professionalController = require('../controllers/prof');

const router = express.Router();

router.get('/', professionalController.getData);

module.exports = router;