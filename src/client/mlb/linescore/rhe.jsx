import React from 'react';
import _ from 'lodash';

export default class Rhe extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            runs: props.runs,
            hits: props.hits,
            errors: props.errors
        };
    }

    render() {
        return (<table className="boxscores-rhe">
            <th>R</th>
            <th>H</th>
            <th>E</th>
            <tbody>
                <tr>
                    <td>{this.state.runs.away}</td>
                    <td>{this.state.hits.away}</td>
                    <td>{this.state.errors.away}</td>
                </tr>
                <tr>
                    <td>{this.state.runs.home}</td>
                    <td>{this.state.hits.home}</td>
                    <td>{this.state.errors.home}</td>
                </tr>
            </tbody>
        </table>);
    }
}
