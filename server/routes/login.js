const express = require("express");
const loginRouter = express.Router();

// Requiring all controllers
const userController = require("../controllers/userController");
const sessionController = require("../controllers/sessionController");
const cookieController = require("../controllers/cookieController");

/*
Setting Cookie upon 1st visit to Login Page. Could also set cookie upon 1st visit to landing page. Would just need to understand route diff btwn '/' & '/static' & 'main'.
Need to also include cookie setup at Sign-Up page.
*/
// app.get('/', cookieController.setCookie, (req, res) => {
//   res.status(200);
// })

// LOGIN REQUEST: /login/loginRequest
loginRouter.post(
  "/loginRequest", // CONFIRM ROUTE NAME WITH FRONT-END TEAM!
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    // return res.status(200).json(res.locals.dataFound);
    return res.sendStatus(200);
  }
);

// SIGN-UP REQUEST:
// Creating a new user in database -> i.e. sign-up
loginRouter.post(
  "/signupRequest", // CONFIRM ROUTE NAME WITH FRONT-END TEAM!
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.sendStatus(200)
);

module.exports = loginRouter;
