const { User } = require('../models/models');

const userController = {};

// Creating a new user
userController.createUser = (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;

  User.create({ firstName, lastName, username, password })
    .then((data) => {
      res.locals.dataCreated = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `createUser: ${err}`,
        status: 400,
        message: { err: 'error occurred in createUser controller' },
      });
    });
};

// Finding a user
userController.findUser = (req, res, next) => {
  const { username } = req.params;

  User.findOne({ username: username })
    .then((data) => {
      res.locals.dataFound = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `findUser: ${err}`,
        status: 400,
        message: { err: 'error occurred in findUser controller' },
      });
    });
};

module.exports = userController;
