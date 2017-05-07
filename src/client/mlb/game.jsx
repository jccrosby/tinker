import React from 'react';
import _ from 'lodash';
import LinescoreWithTeams from './linescore/linescoreWithTeams.jsx';

export default class Game extends React.Component {

    constructor(props) {

        super(props);
        this.state = {game: props.game};

    }

    render() {

        let game = this.state.game;

        return (<div id={'game_' + game.game_pk} className="game">
            <span className="versus">{game.away_team_name +' @ '+ game.home_team_name}</span>
            <span className="score">
                <LinescoreWithTeams linescore={game.linescore} homeTeamName={game.home_code.toUpperCase()} awayTeamName={game.away_code.toUpperCase()}/>
            </span>
            <span className="pitcherWin">
            </span>
            <span className="pitcherLose">
            </span>
        </div>);

    }

}
