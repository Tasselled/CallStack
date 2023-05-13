const express = require('express');

// Requiring all controllers
const userController = require('../controllers/userController');

const mainRouter = express.Router();

module.exports = mainRouter;
