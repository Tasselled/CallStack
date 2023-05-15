const express = require('express');
const mainRouter = express.Router();

// Requiring all controllers
const mainController = require('../controllers/mainController');
const sessionController = require('../controllers/sessionController')

mainRouter.get('/get', sessionController.isLoggedIn, (req, res) => {return res.status(200).send("IT WORKS!")});


// mainRouter.get('/main', mainController.getPost )

module.exports = mainRouter;
