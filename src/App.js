import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer, TestMainContainer, Notfound} from "./container";
import testContainer2 from './container/testContainer2';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import test from './container/Test';


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/:project_state" component={UrlMainContainer} />
                    <Route path="/test" component={TestMainContainer} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
    );
  }
}


export default App;
