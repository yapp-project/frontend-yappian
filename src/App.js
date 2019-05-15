import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer, TestMainContainer, Notfound} from "./container";
import CreateProjectPopup from './components/popup/CreateProjectPopup'
import testContaier2 from './container/testContainer2';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import test from './container/Test';


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/main/:projectIdx" component={UrlMainContainer} />
                    <Route path="/test" component={CreateProjectPopup} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
    );
  }
}


export default App;
