import React from 'react';
import _ from 'lodash';
import Game from './game.jsx';

export default class Scoreboard extends React.Component {

    constructor(props) {

        super(props);

        console.log('scoreboard::constructor -> props', props);

        this.state = {games: _.get(props, 'scores.data.games.game', [])};

        console.log('scoreboard::constructor -> this.state', this.state);

    }

    getGamesList() {

        let gamesList = this.state.games.map((game) => {
            return (<li id={game.game_pk} key={game.game_pk}><Game game={game}/></li>);
        });
        return (<ul>{gamesList}</ul>);

    }

    render() {

        return (<div className="gamesList">
            {this.getGamesList()}
        </div>);

    }

}
