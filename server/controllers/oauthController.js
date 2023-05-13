const oauthController = {};

oauthController.githubOAuth = (req, res, next) => {
  const CLIENT_ID = 'e889341eeb43ae362fa6';
  const CLIENT_SECRET = '7dc59dadeb76ffe4d8ec0361725f7f6416af7190';
  const GITHUB_URL = 'https://github.com/login/oauth/access_token';
  const REDIRECT_URL = 'http://localhost:8080/api/oauth';

  if (req.query.code) {
    fetch(
      `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}&redirect_uri=${REDIRECT_URL}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // Response will be in this format
        /*
        {
          access_token: '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',
          token_type: 'bearer',
          scope: '',
        };
        */
        res.cookie('o_auth_token', response.access_token, { httpOnly: true, maxAge: 3600 * 1000, secure: true });
        return next();
      });
  } else {
    return next();
  }
};

module.exports = oauthController;
