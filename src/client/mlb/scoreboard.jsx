import React from 'react';
import _ from 'lodash';
import Game from './game.jsx';

export default class Scoreboard extends React.Component {

    constructor(props) {

        super(props);
        this.state = {games: _.get(props, 'scores.data.games.game', [])};

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
