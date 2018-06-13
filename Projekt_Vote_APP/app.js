const express = require('express');

const app = express();

const songRoutes = require('./api/routes/songs');
const voteRoutes = require('./api/routes/votes');

app.use('/songs', songRoutes);
app.use('/votes', voteRoutes);

module.exports = app;