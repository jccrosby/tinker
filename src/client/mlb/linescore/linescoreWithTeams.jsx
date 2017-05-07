import React from 'react';
import _ from 'lodash';
import Rhe from './rhe.jsx';
import Scores from './scores.jsx';
import Linescore from './linescore.jsx';
import Teams from './teams.jsx';

export default class LinescoreWithTeams extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            linescore: props.linescore,
            homeTeamName: props.homeTeamName,
            awayTeamName: props.awayTeamName
        };
    }

    render() {

        let linescore = this.state.linescore;

        return (<div className="linescore">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Teams awayTeamName={this.state.awayTeamName}
                                homeTeamName={this.state.homeTeamName} />
                        </td>
                        <td>
                            <Linescore linescore={this.state.linescore}/>
                        </td>
                        <td>
                            <Rhe runs={this.state.linescore.r}
                                hits={this.state.linescore.h}
                                errors={this.state.linescore.e}/>
                        </td>
                        <td>
                            <Scores scores={this.state.linescore.r} header="Score" />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>);

    }
}
