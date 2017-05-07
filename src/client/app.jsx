import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Scoreboard from './mlb/scoreboard.jsx'

ReactDOM.render(<Scoreboard scores={window.scoresApp.scores}/>,
    document.getElementById('scoresApp'));
