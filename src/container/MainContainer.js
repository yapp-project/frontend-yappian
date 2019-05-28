import React, {Component} from 'react';
import './MainContainer.css';
import Cookies from 'universal-cookie';

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
        //console.log(this.state.cookie)
    }

    handleLogin = (session) => {
        //alert(session + "환영합니다")
        //cookies.set('JSESSIONID', session)
        //alert(cookies.get('JSESSIONID'))
        // this.setState({
        //     login: !this.state.login
        // })
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