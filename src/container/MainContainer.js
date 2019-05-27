import React, {Component} from 'react';
import './MainContainer.css';

import mainLogo from '../img/yappian-copy@3x.png'
import MainInfoFont from '../img/MainInfoFont.png'

import { ProjectListWrapper, Login, Logout } from '../components';
class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false
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
                            {
                                this.state.login === true ?
                                    (
                                        <Logout login={this.state.login} />
                                    ) :
                                    (
                                        <Login />
                                    )
                            }

                        </div>
                    </div>
                    <img src={MainInfoFont}  className="mainInfo"/>

                </div>
                <div className="bottom">
                    <ProjectListWrapper />
                </div>
            </div>
        );
    }
}

export default MainContainer;