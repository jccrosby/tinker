let _ = require('lodash');
let pad = require('pad-number');
let request = require('request');

exports.loadSchedule = (year, month, day) => {

    return new Promise((resolve, reject) => {

        var scheduleUrl = `http://gd2.mlb.com/components/game/mlb/year_${pad(year, 2)}/month_${pad(month, 2)}/day_${pad(day, 2)}/master_scoreboard.json`;
        var result;

        request(scheduleUrl, (err, response, body) => {

            if (err) {
                reject(err);
            }

            try {
                result = JSON.parse(body);
            } catch (err) {
                reject(err)
            }

            resolve(result);

        });

    });

}
