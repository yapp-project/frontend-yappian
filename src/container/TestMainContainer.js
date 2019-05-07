import React, {Component} from 'react';
import './TestMainContainer.css';
import mainLogo from '../img/yappian-copy@3x.png'
import axios from 'axios';
import { ProjectList, Login, Logout } from '../components';
import { BrowserRouter as Link } from 'react-router-dom';

//{this.state.login === true ? (<Logout />) : (<Login onLogin={this.onLogin}/>)}
class TestMainContainer extends Component {
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
                    <div className="mainInfo">
                        <div className="bigInfo-font">
                            Your app with-<br/>
                            passion and potential
                        </div>
                        <div className="smallInfo-font">
                            YAPP은 대학생들의 다양한 아이디어와 열정으로 기존에 없던 새로운 가치를 만들기 위해 노력하는 대학생 연합 기업형 IT동아리입니다.<br/>
                            YAPPIAN이 만들어가는 새로운 가치를 아카이빙 서비스 YAPPAIN에서 확인하세요!
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

export default TestMainContainer;