var _ = require('lodash');
var pad = require('pad-number');
var request = require('request');

var _loadSchedule = function(year, month, day) {
    return new Promise((resolve, reject) => {

        var scheduleUrl = `http://gd2.mlb.com/components/game/mlb/year_${pad(year, 2)}/month_${pad(month, 2)}/day_${pad(day, 2)}/master_scoreboard.json`;
        var result;

        console.log('Loading from: ', scheduleUrl);

        request(scheduleUrl, function(err, response, body){

            if(err) {
                reject(err);
            }

            try {
                result = JSON.parse(body);
            } catch(err) {
                reject(err)
            }

            resolve(result);

        });

    });
}

exports.loadSchedule = _loadSchedule;
