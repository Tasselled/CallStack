const {User} = require('../models/models');
const {Post} = require('../models/models');

const mainController = {};

mainController.getAllPosts = (req, res, next) => {
    
  return next();

  return next({
    log: `getAllPosts: ${err}`,
    status: 400,
    message: { err: 'error occurred in mainController.getAllPosts controller' },
  });
}

mainController.createPost = (req, res, next) => {
    const {userId, postTitle, postBody, postTag, numLikes} = req.body;

    Post.create({ userId, postTitle, postBody, postTag, numLikes })
    .then((post) => {
      res.locals.post = post.id;
      return next();
    })
    .catch((err) => {
      return next({
        log: `createPost: ${err}`,
        status: 400,
        message: { err: 'error occurred in createPost controller' },
      });
    });
  
}
module.exports = mainController;
