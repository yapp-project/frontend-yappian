import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer, TestMainContainer, Notfound} from "./container";
import testContaier from './container/testContainer';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import H2Container from './container/H2Container'
import HCheckContainer from './container/HCheckContainer'
import LoginContainer from './container/LoginContainer'
import LogoutContainer from './container/LogoutContainer'


class App extends Component {
    componentDidMount(){
        document.title = "Yappian"
    }



    render() {
    return (
            <BrowserRouter>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/main/:projectIdx" component={UrlMainContainer} />
                    <Route path="/test" component={TestMainContainer} />
                    <Route path="/test1" component={testContaier} />
            </BrowserRouter>

    );
  }
}


export default App;
