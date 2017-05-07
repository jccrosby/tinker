import React from 'react';

export default class Teams extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            homeTeamName: props.homeTeamName,
            awayTeamName: props.awayTeamName
        };
    }

    render() {
        return (<table>
            <th>Teams</th>
            <tbody>
                <tr>
                    <td>{this.state.awayTeamName}</td>
                </tr>
                <tr>
                    <td>{this.state.homeTeamName}</td>
                </tr>
            </tbody>
        </table>);
    }
}
