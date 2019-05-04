import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer, TestMainContainer} from "./container";
import testContainer2 from './container/testContainer2';
import {BrowserRouter, Route} from "react-router-dom";
import test from './container/Test';


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Route exact path="/" component={TestMainContainer} />
                <Route path="/:project_state" component={UrlMainContainer} />
                <Route path="/test" component={testContainer2} />
                <Route path="/test2" component={test} />
            </BrowserRouter>
    );
  }
}


export default App;
