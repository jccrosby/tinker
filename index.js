let  express = require('express');
var exphbs = require('express-handlebars');
let  _ = require('lodash');
let  scoreboardRoute = require('./src/server/routes/scoreboard');

let app = express();

var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine);
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutDir: 'views/layouts',
    partialsDir: 'views/partials',
    defaultLayout: 'main',
    helpers: {
        json: (context) => {
            return JSON.stringify(context);
        }
    }
}));
app.set('view engine', '.hbs');

app.use('/scoreboard', scoreboardRoute);

app.use(express.static('public'));
//app.use('/scoreboard', scoreboardRoute);



/**
 *
 * Start the server
 *
 */
app.listen(3000, function() {

    console.log('Tinker listening on port 3000.');

});
