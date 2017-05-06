import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';
import User from './user.js';
import Clock from './clock'
import WarningBanner from './warningBanner';

let user = new User({firstName: 'John', lastName: 'Crosby'});

export class ClockApp extends React.Component {
    render() {
        return (<Clock/>);
    }
}

export class NumberList extends React.Component {
    constructor(props) {
        super(props);
    }
    getListItems() {
        return this.props.numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        );
    }
    render() {
        return (<ul>{this.getListItems()}</ul>);
    }
}

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState((prevState) => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <h2>Hello {user.formatName()}!</h2>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                  {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <NumberList numbers={[1,2,3]}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'));

ReactDOM.render(
    <ClockApp/>, document.getElementById('clock'));
