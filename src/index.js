import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainContainer from './container/MainContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import Navbar from "./components/navbar/firstMain/Navbar";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
