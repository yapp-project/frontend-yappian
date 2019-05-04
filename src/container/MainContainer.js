import React, {Component} from 'react';
import './MainContainer.css';
import axios from 'axios';
import { ProjectList, Login, Logout } from '../components';
import { BrowserRouter as Link } from 'react-router-dom';

import styled from 'styled-components';
import CreatePopupWrapper from "../components/popup/CreatePopupWrapper";

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
            gisu: "13",
            project: [], //프로젝트 리스트, 파일 '../api/project_sample.json',
            showModal : false
        }

        this.onLogin = this.onLogin.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    componentDidMount() {
        this._getProejctList();
    }

    handleOpen (){
        this.setState({
            showModal : true
        })
    }

    handleClose (){
        this.setState({
            showModal : false
        })
    }

    onLogin(){
        this.setState({
            login: true
        });
    }

    onChange(gisu) {
        this.setState({
           gisu: gisu
        });
        this._getProejctList();
    }



    _getProejctList() {
        const apiUrl = 'project_sample.json';

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    project: res.data.project.filter(project => (
                        project.gisu === this.state.gisu
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div className="main">
                <div className="navbar">
                    <div className="left">
                        <Link to="/">
                        <div className="logo">YAPPIAN.</div>
                        </Link>
                    </div>
                    <div className="right">
                        {
                            this.state.login === true ? <Logout /> : <Login onLogin={this.onLogin}/>
                        }
                    </div>
                </div>
                <div className="intro">
                    <div className="intro_font">
                        <div className="Your-app-with--passi">
                            Your app with-<br/>
                            passion and potential
                        </div>
                        <div className="upder-big-font">
                            YAPP은 대학생들의 다양한 아이디어와 열정, 그리고 가능성을 바탕으로 조그마한 변화일지라도 <br/>
                            의미가 있는 일을 해나가고, 기존에 없던 새로운 가치를 만들기 위해 노력하는 대학생 연합 기업형 IT동아리입니다.
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    { this.state.project.length > 0 ? (
                            <ProjectList projects={this.state.project} gisu={this.state.gisu} onChange={this.onChange}
                                         handleOpen={this.handleOpen} handleClose={this.handleClose}/>
                        ) : (
                        <span>프로젝트가 없습니다.</span>
                    )}
                </div>
            </div>
        );
    }
}

export default MainContainer;