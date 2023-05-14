const express = require('express');
const loginRouter = express.Router();

// Requiring all controllers
const userController = require('./controllers/userController');

// Creating a new user in database
loginRouter.post('/login', userController.createUser, (req, res) =>
  res.status(200)
);

// Finding user in database
loginRouter.get('/login/:name', userController.findUser, (req, res) => {
  return res.status(200).json(res.locals.dataFound);
});

module.exports = loginRouter;
