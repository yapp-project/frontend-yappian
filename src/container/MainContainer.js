import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'


import './MainContainer.css';

import mainLogo from '../img/yappian-copy@3x.png'
import MainInfoFont from '../img/MainInfoFont.png'

import { ProjectListWrapper, Login, Logout } from '../components';

const cookies = new Cookies();
class MainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: false
        }
    }

    componentDidMount() {
        this.getSession()
    }

    handleLogin = (status) => {
        this.setState({
            login: status
        })
    }

    getSession = () => {
        axios.get('http://localhost:8085/session')
            .then(res => {
                console.log(res.data)
                if(res.data == 'ANONYMOUS'){
                    this.handleLogin(false)
                }else{
                    this.handleLogin(true)
                }

            })
            .catch(error => {
                console.log(error)
            })
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
                                        <Login handleLogin={this.handleLogin}/>
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