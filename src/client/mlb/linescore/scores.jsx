import React from 'react';
import _ from 'lodash';

export default class Scores extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            header: props.header,
            scores: props.scores
        };
    }

    render() {
        return (<table className="boxscores-scores">
            <th>{this.state.header}</th>
            <tbody>
                <tr>
                    <td>{this.state.scores.away}</td>
                </tr>
                <tr>
                    <td>{this.state.scores.home}</td>
                </tr>
            </tbody>
        </table>);
    }
}
