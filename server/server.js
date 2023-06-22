const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 3000;

// Parsing urlencoded content in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Handling request for static files
app.use('/static', express.static(path.resolve(__dirname, '../src')));

// Requiring route handlers
const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');

// Defining route handlers
app.use('/login', loginRouter);
app.use('/main', mainRouter);

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
