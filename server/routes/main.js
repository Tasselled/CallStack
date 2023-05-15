const express = require('express');
const mainRouter = express.Router();

// Requiring all controllers
const mainController = require('../controllers/mainController');
const sessionController = require('../controllers/sessionController')

// Getting all posts
mainRouter.get('/getAll', sessionController.isLoggedIn, mainController.getAllPosts, (req, res) => {
  console.log('res.locals.postsArray: ', res.locals.postsArray)
  return res.status(200).json(res.locals.postsArray)});

// Creating posts
mainRouter.post('/createPost', sessionController.isLoggedIn, mainController.createPost, (req, res) => {return res.status(200).send('NEW POST CREATED!')});


// Populate individual post page comments:
mainRouter.post('/getPostComments', sessionController.isLoggedIn, mainController.getPostComments, (req, res) => {return res.status(200).json(res.locals.comments)})

// Creating post comments
mainRouter.post('/createPostComments', sessionController.isLoggedIn, mainController.createPostComments, (req, res) => {return res.status(200).send('NEW POST COMMENT CREATED!')});

// Searching All Posts:
mainRouter.post('/searchPosts', sessionController.isLoggedIn, mainController.searchPosts, (req, res) => { return res.status(200).send("IT WORKED")});

module.exports = mainRouter;
