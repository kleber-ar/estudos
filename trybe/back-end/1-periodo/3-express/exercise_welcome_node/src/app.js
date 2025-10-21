const express = require('express');
const moviesRouter = require('./routers/movies.routes');

const app = express();
app.use(express.json());

app.use('/movies', moviesRouter);

module.exports = app;
