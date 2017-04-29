import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';
import {User} from './user.js';

let user = new User({firstName: 'John', lastName: 'Crosby'});

ReactDOM.render(
  <h1>Hello, {user.formatName()}!</h1>,
  document.getElementById('root')
);
