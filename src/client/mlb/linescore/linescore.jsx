import React from 'react';
import _ from 'lodash';
import Rhe from './rhe.jsx';
import Scores from './scores.jsx';

const HOME = 'home';
const AWAY = 'away';

export default class Linescore extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            linescore: props.linescore
        };
    }

    getLinescoreHeder() {

        let inningLabel = 0;
        return this.state.linescore.inning.map((inning) => {
            inningLabel++;
            return <th key={inningLabel} className="boxscore-inning">{inningLabel}</th>
        });

    }

    getLinescoreRow(side) {
        let inningKey = 0;
        return this.state.linescore.inning.map((inning) => {
            return <td key={inningKey++} className={'inning-' + side}>{inning[side]}</td>;
        });
    }

    render() {
        return (<table className="boxscores-linescore">

            {this.getLinescoreHeder()}

            <tbody>

                <tr className="boxscore-away">
                    {this.getLinescoreRow(AWAY)}
                </tr>

                <tr className="boxscore-home">
                    {this.getLinescoreRow(HOME)}
                </tr>

            </tbody>
        </table>);
    }

}
