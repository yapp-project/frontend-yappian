import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {MainContainer} from "./container";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path='/' component={MainContainer}/>
        </Router>
    );
  }
}

library.add(faStroopwafel)

export default App;
