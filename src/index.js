import React from 'react';
import ReactDOM from 'react-dom';  // eslint-disable-next-line
import main from './main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();