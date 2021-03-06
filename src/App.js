import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer, TestMainContainer, Notfound} from "./container";
import testContaier from './container/testContainer';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";


class App extends Component {
    componentDidMount(){
        document.title = "Yappian"
    }



    render() {
    return (
        <HashRouter>
                <Route exact={true} path="/" component={MainContainer} />
                <Route path="/main/:projectIdx" component={UrlMainContainer} />
                <Route path="/error" component={Notfound} />
                <Route path="/test" component={TestMainContainer} />
                {/*<Route path="/test1" component={testContaier} />*/}
        </HashRouter>
    );
  }
}


export default App;
