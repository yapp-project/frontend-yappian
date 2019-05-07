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

        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        this._getProejctList();
    }

    onLogin = () => {
        this.setState({
            login: true
        });
    }

    onChange = (gisu) => {
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