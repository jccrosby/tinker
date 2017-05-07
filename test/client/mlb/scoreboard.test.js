import Scoreboard from '../../../src/client/mlb/scoreboard'

test('it should create a new Scoreboard object.', (done) => {
    let scoreboard = new Scoreboard();
    expect(scoreboard).not.toBeNull;
    done();
});

/*test('it should get scores', (done) => {

    let scoreboard = new Scoreboard();
    let scores = scores.getScores();

    expect(scores).not.toBeNull;
    expect(scores).not.toBeUndefined;
    expect(Array.isArray(scores)).to.be(true);

    done();
});*/
