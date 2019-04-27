import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer} from "./container";
import testContainer from './container/testContainer';
import {BrowserRouter, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Route exact path="/" component={MainContainer} />
                <Route path="/url/:project_state" component={UrlMainContainer} />
                <Route path="/test" component={testContainer} />
            </BrowserRouter>
    );
  }
}


export default App;
