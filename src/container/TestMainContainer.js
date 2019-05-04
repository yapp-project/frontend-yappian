import React, {Component} from 'react';
import './TestMainContainer.css';
import mainLogo from '../img/yappian-copy@3x.png'
import axios from 'axios';
import { ProjectList, Login, Logout } from '../components';
import { BrowserRouter as Link } from 'react-router-dom';


class TestMainContainer extends Component {
    constructor(props) {
        super(props);

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

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestMainContainer;