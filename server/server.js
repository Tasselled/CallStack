const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// Requiring route handlers
const apiRouter = require('./routes/api');

// Parsing urlencoded content in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handling request for static files
app.use(express.static(path.resolve(__dirname, '../src')));

// Defining route handlers
app.use('/api', apiRouter);
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for")
);

// 404 error handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
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
