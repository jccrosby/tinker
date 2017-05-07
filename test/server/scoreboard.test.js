import scoreboard from '../../src/server/scoreboard';
//import expect from 'chai').expect;
import _ from 'lodash';

/** Jest tests */
test('should load and return the scoreboard data', (done) => {
    var year = 2016;
    var month = 7;
    var day = 30;
    scoreboard.loadSchedule(year, month, day).then((scores) => {

        var games = scores.data.games.game;

        expect(parseInt(_.get(scores, 'data.games.year', null))).toBe(year);
        expect(parseInt(_.get(scores, 'data.games.month', null))).toBe(month);

        expect(games).not.toBeNull;
        expect(Array.isArray(games)).toBe(true);
        expect(games.length).toBeGreaterThan(0);

        done();

    }).catch(function(err) {

        done(err);

    });
});


/** Mocha tests **/
/*
describe('Schedule', function() {

    describe('loadSchedule', function() {

        it('should load and return the scoreboard data', function(done) {
            var year = 2016;
            var month = 7;
            var day = 30;
            scoreboard.loadSchedule(year, month, day).then(function(scores) {

                var games = scores.data.games.game;

                expect(parseInt(_.get(scores, 'data.games.year', null))).to.equal(year);
                expect(parseInt(_.get(scores, 'data.games.month', null))).to.equal(month);

                expect(games).to.not.be.null;
                expect(games).to.be.a('Array');
                expect(games).to.have.length.above(0);

                done();

            }).catch(function(err){

                done(err);

            });

        });

    });

});*/
