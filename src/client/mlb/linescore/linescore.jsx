import React from 'react';
import _ from 'lodash';

const HOME = 'home';
const AWAY = 'away';

export default class Linescore extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            linescore: props.linescore,
            homeTeamName: props.homeTeamName,
            awayTeamName: props.awayTeamName
        };
    }

    getTableHeder() {

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

        let linescore = this.state.linescore;

        return (<div className="linescore">

            <table>
                <tbody>
                    {this.getTableHeder()}
                    <th className="boxscore-runs">R</th>
                    <th className="boxscore-hits">H</th>
                    <th className="boxscore-errors">E</th>
                    <th className="boxscore-scores"></th>

                    <tr className="boxscore-home">
                        {this.getLinescoreRow(HOME)}
                        <td className="boxscore-away-runs">{this.state.linescore.r.home}</td>
                        <td className="boxscore-away-hits">{this.state.linescore.h.home}</td>
                        <td className="boxscore-away-errors">{this.state.linescore.e.home}</td>
                        <td className="boxscore-home-score">{this.state.awayTeamName}: {linescore.r.home}</td>
                    </tr>

                    <tr className="boxscore-away">
                        {this.getLinescoreRow(AWAY)}
                        <td className="boxscore-away-runs">{this.state.linescore.r.away}</td>
                        <td className="boxscore-away-hits">{this.state.linescore.h.away}</td>
                        <td className="boxscore-away-errors">{this.state.linescore.e.away}</td>
                        <td className="boxscore-away-score">{this.state.homeTeamName}: {linescore.r.away}</td>
                    </tr>

                </tbody>
            </table>

            <div></div>

        </div>);

    }
}
