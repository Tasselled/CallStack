const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 3000;

// Requiring route handlers
const mainRouter = require('./routes/main');

// Parsing urlencoded content in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Handling request for static files
app.use('/static', express.static(path.resolve(__dirname, '../src')));

// Requiring all controllers
const userController = require('../controllers/userController');

// Require all Routers:
const userRouter = express.Router();

// Defining route handlers
app.use('/main', mainRouter);

// Creating a new user in database
userRouter.post('/login', userController.createUser, (req, res) =>
  res.status(200)
);

// Finding user in database
userRouter.get('/login/:name', userController.findUser, (req, res) => {
  return res.status(200).json(res.locals.dataFound);
});

// 404 error handler
app.use('*', (req, res) => {
  res.status(404).send("This is not the page you're looking for");
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

// Starting server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
