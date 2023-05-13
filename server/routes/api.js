const express = require('express');

// Require all controllers
const userController = require('../controllers/userController');
const oauthController = require('../controllers/oauthController');

const userRouter = express.Router();

// Creating a new user
userRouter.post('/', userController.createUser, (req, res) => res.status(200));

userRouter.get('/oauth', oauthController.githubOAuth, (req, res) => res.sendStatus(200));

module.exports = userRouter;
