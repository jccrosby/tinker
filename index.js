let  express = require('express');
let  _ = require('lodash');
let  scoreboardRoute = require('./src/server/routes/scoreboard');

let app = express();

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
