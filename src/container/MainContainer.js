import React, {Component} from 'react';
import './MainContainer.css';

import mainLogo from '../img/yappian-copy@3x.png'
import MainInfoFont from '../img/MainInfoFont.png'

import axios from 'axios';
import { ProjectList, Login, Logout } from '../components';
import { BrowserRouter as Link } from 'react-router-dom';

//{this.state.login === true ? (<Logout />) : (<Login onLogin={this.onLogin}/>)}
class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
            gisu: "13",
            project: []
        }

    }



    render(){
        return (
            <div className="mainWrapper">
                <div className="top">
                    <div className="nav">
                        <div className="nav-left">
                            <img src={mainLogo} className="mainLogo" />
                        </div>
                        <div className="nav-right">
                            <Logout />
                        </div>
                    </div>
                    <img src={MainInfoFont}  className="mainInfo"/>
                    <div>

                    </div>
                </div>
                <div className="bottom">
                    <ProjectList />
                </div>
            </div>
        );
    }
}

export default MainContainer;