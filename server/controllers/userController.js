const { User } = require('../models/models');
const bcrypt = require('bcryptjs');

const userController = {};

// Creating a new user
userController.createUser = (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;

  // Initial check to see if user inputted something into both fields:
  // if(!username || !password) {
  //   return next({
  //     log: 'Missing username or password in userController.createUser',
  //     status: 400,
  //     message: {err: 'An error occurred'},
  //   });
  // }

  User.create({ firstName, lastName, username, password })
    .then((newUser) => {
      res.locals.user = newUser.id; // Persisting document only through its unique id for now.
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
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;

  // Could check !username || !password -> conditional, throw error.

  User.findOne({ username })
    .then((user) => {
      // res.locals.dataFound = data;
      console.log(user)

      if(!user) {
        // Trying to send back a boolean to the frontend if the user is not found in DB, while also interruption the middleware chain (i.e. no 'return next()' here). Same logic in line 54 below.
        res.send(false);
      }

      else {
        bcrypt
          .compare(password, user.password)
          .then((result) => {
            console.log("RESULT", result)
            if(!result) {
              // passwords did not match
              res.send(false);
            } else {
              // passwords match!
              console.log("USERID", user.id)
              res.locals.user = user.id;
              return next();
            }
          });
      };
    })
    .catch((err) => {
      return next({
        log: `verifyUser: ${err}`,
        status: 400,
        message: { err: 'error occurred in verifyUser controller' },
      });
    });
};

module.exports = userController;
