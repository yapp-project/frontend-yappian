import React, { Component } from 'react';
import './App.css';
import {MainContainer, UrlMainContainer, TestMainContainer, Notfound} from "./container";
import testContaier from './container/testContainer';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';



class App extends Component {
    componentDidMount(){
        document.title = "Yappian"
    }



    render() {
    return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/main/:projectIdx" component={UrlMainContainer} />
                    <Route path="/test" component={TestMainContainer} />
                    <Route path="/test1" component={testContaier} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
    );
  }
}


export default App;
