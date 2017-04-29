var express = require('express');
var router = express.Router();
var scoreboard = require('../scoreboard');
var _ = require('lodash');

/**
 *
 * Master Scorebord route
 *
 */
router.get('/:year/:month/:day', function(req, res) {

    var params = req.params;
    var year = _.get(params, 'year', undefined);
    var month = _.get(params, 'month', undefined);
    var day = _.get(params, 'day', undefined);

    if (day && month && year) {

        console.log('Load the schedule for ', year, month, day);
        scoreboard.loadSchedule(year, month, day).then((scores) => {

            res.send(scores);

        }).catch((err) => {

            res.send('Error: ' + err.toString())

        });

    } else {

        res.send('ERROR: day/month/year is required', day, month, year);

    }

});

module.exports = router;
