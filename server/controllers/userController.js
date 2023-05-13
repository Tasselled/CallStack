const User = require('./models/models');

const userController = {};

userController.createUser = (req, res, next) => {
  const { name, userId, password } = req.body;

  User.create({ name, userId, password })
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

module.exports = userController;
