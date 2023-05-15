const Session = require("../models/sessionModel");

const sessionController = {};

/*
isLoggedIn - find appropriate session for this request in DB - verify whether or not session is still valid
*/
sessionController.isLoggedIn = async (req, res, next) => {
  console.log('IN "ISLOGGEDIN Controller:');
  console.log("req.cookies: ", req.cookies);

  // Find ssid cookie in DB to see if user is logged in:
  try {
    const session = await Session.findOne({ cookieId: req.cookies.ssid });

    if (!session) {
      // no session found
      return res.send(false); // Redirect to Signup here? Or login or main landing page?
    } else {
      return next();
    }
  } catch {
    return next({
      log: "Error occurred in sessionController.isLoggedIn.",
      status: 500,
      message: { err: "An error occurred" },
    });
  }
};

/*
startSession - create & save a new Session into the DB
*/
sessionController.startSession = async (req, res, next) => {
  console.log("COOKIEID", res.locals.user);
  try {
    await Session.findOneAndUpdate(
      { cookieId: res.locals.user },
      { createdAt: Date.now() },
      { upsert: true, setDefaultsOnInsert: true }
    );
    return next();
  } catch {
    return next({
      log: "Error occured in sessionController.startSession",
      status: 500,
      message: { err: "An error occurred" },
    });
  }
};

module.exports = sessionController;
