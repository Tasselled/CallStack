const cookieController = {};

// setCookie (playing around)
cookieController.setCookie = (req, res, next) => {
  res.cookie('secret', Math.floor(Math.random() * 100).toString());
  return next();
};


// setSSIDCookie:
cookieController.setSSIDCookie = (req, res, next) => {
  console.log('IN setSSIDCookie CONTROLLER: ');
  res.cookie('ssid', res.locals.user, {httpOnly: true});
  return next();

  // need some error handling here?
}

module.exports = cookieController;