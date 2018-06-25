const express = require('express');
const app = express();
const morgan = require('morgan');

const songRoutes = require('./api/routes/songs');
const voteRoutes = require('./api/routes/votes');

app.use(morgan('dev'));

// Routes which should handle requests
app.use('/songs', songRoutes);
app.use('/votes', voteRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;