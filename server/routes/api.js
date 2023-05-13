const express = require('express');

// Require all controllers
const userController = require('../controllers/userController');

const userRouter = express.Router();

// Creating a new user
userRouter.post('/', userController.createUser, (req, res) => res.status(200));

module.exports = userRouter;
