const express = require('express');
const loginRouter = express.Router();

// Requiring all controllers
const userController = require('../controllers/userController');

// Finding user in database
loginRouter.get('/:username', userController.findUser, (req, res) => {
  return res.status(200).json(res.locals.dataFound);
});

// Creating a new user in database
loginRouter.post('/', userController.createUser, (req, res) =>
  res.sendStatus(200)
);

module.exports = loginRouter;
