var express = require('express');
var app = express();
var _ = require('lodash');
var scoreboardRoute = require('./routes/scoreboard');

app.use(express.static('public'));
app.use('/scoreboard', scoreboardRoute);

/**
 *
 * Start the server
 *
 */
app.listen(3000, function() {

    console.log('Tinker listening on port 3000.');

});
