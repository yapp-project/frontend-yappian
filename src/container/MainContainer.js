import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import {Link} from 'react-router-dom'


import './MainContainer.css';

import mainLogo from '../img/yappian-copy@3x.png'
import MainInfoFont from '../img/MainInfoFont.png'

import { ProjectListWrapper, Login, Logout } from '../components';

const cookies = new Cookies();
class MainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: false,
            //gisuList : [],
            projectList : [],
            projectListSize : 0
        }
    }

    componentDidMount() {
        this.getSession();
        this.getProjectListSize();
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
                if(res.data == 'ANONYMOUS' || res.data == 'INVALID'){
                    this.handleLogin(false)
                }else{
                    this.handleLogin(true)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    // getOrdersNumber = () => {
    //     const apiUrl = 'http://localhost:8085/api/orders';
    //
    //     axios.get(apiUrl)
    //         .then(res => {
    //                 res.data.map((list, index) =>
    //                     this.setState({
    //                         gisuList : this.state.gisuList.concat({
    //                             key : index, text : list.number+'기', value: parseInt(list.number)
    //                         })
    //                     })
    //
    //                 )
    //             }
    //         )
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    getProjectListSize = () => {
        const apiUrl = 'http://localhost:8085/api/projects';

        axios.get(apiUrl)
            .then(res => {
                console.log(res.data)
                this.setState({
                    projectList : res.data,
                    projectListSize : res.data.length
                })
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
                            <Link to="/">
                                <img src={mainLogo} className="mainLogo" />
                            </Link>
                        </div>
                        <div className="nav-right">
                            {
                                this.state.login === true ?
                                    (
                                        <Logout login={this.state.login} gisuList={this.state.gisuList}/>
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
                    {
                        this.state.projectListSize > 0 ?
                            <ProjectListWrapper />
                            :
                            <div className="bottomProjectListNull">완료된 프로젝트가 없습니다.</div>
                    }
                </div>
            </div>
        );
    }
}

export default MainContainer;