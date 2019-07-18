import React, {Component} from 'react';
import axios from 'axios'
import './MemberInfo.css';
import logoutIcon from '../../img/logoutIcon.png'
import moveBtn from '../../img/stroke-1@3x.png'
import { Link, Redirect } from 'react-router-dom'
import Modal from "react-modal";

const memberInfoModalBackground = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'none'
    }
}

class MainMemberInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            memberjoinList : [],
            redirectNum : 0
        }

    }

    componentDidMount() {
        this.handleGetJoinProject()
    }

    handleGetJoinProject = () => {
        axios.get('https://yappian.com/api/user/projects')
            .then(res => {
                this.setState({
                    memberjoinList: this.state.memberjoinList.concat(res.data)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    showMemberInfoPopup = () => {
        this.props.showMemberInfoPopup()
    }

    handleLogout = () => {
        window.location = 'https://yappian.com/api/logout'
    }

    openMemberInfoPopup = () => {
        this.props.openMemberInfoPopup();
    }

    closeMemberInfoPopup = () => {
        this.props.closeMemberInfoPopup();
    }


    redirectToUrlInMain = (projectIdx) => {
        window.location = 'https://yappian.com/#/main/' + projectIdx
    }


    render(){
        return (
            <Modal
                isOpen={this.props.memberInfoPopup}
                onRequestClose={this.closeMemberInfoPopup}
                className="memberInfoWrapper" style={memberInfoModalBackground}
            >
                <div className="memberInfoWrapperTitle">참여한 프로젝트</div>
                <div className="joinList">
                    {/*<div className="joinObjectWrapper" onClick={()=> {this.redirectToUrlInMain(1)}}>*/}
                    {/*<span className="joinObjectGisu">14기</span>*/}
                    {/*<span className="joinObjectTitle">123</span>*/}
                    {/*<span className="joinObjectPlatform">123123</span>*/}
                    {/*<span className="joinObjectBtn">*/}
                    {/*<img src={moveBtn} className="moveBtnStyled" />*/}
                    {/*</span>*/}
                    {/*</div>*/}
                    {/*<div className="joinObjectWrapper" onClick={()=> this.redirectToUrlInMain(2)}>*/}
                    {/*<span className="joinObjectGisu">14기</span>*/}
                    {/*<span className="joinObjectTitle">123</span>*/}
                    {/*<span className="joinObjectPlatform">123123</span>*/}
                    {/*<span className="joinObjectBtn">*/}
                    {/*<img src={moveBtn} className="moveBtnStyled" />*/}
                    {/*</span>*/}
                    {/*</div>*/}
                    {/*<div className="joinObjectWrapper" onClick={()=> this.redirectToUrlInMain(3)}>*/}
                    {/*<span className="joinObjectGisu">14기</span>*/}
                    {/*<span className="joinObjectTitle">123</span>*/}
                    {/*<span className="joinObjectPlatform">123123</span>*/}
                    {/*<span className="joinObjectBtn">*/}
                    {/*<img src={moveBtn} className="moveBtnStyled" />*/}
                    {/*</span>*/}
                    {/*</div>*/}

                    {
                        this.state.memberjoinList.length <= 0
                            ?
                            <div className="alignCenterNoJoin">참여한 프로젝트 없음</div>
                            :
                            this.state.memberjoinList.map((list, i) => (
                                <div className="joinObjectWrapper" key={i} onClick={() => this.redirectToUrlInMain(list.idx)}>
                                    <span className="joinObjectGisu">{list.orderNumber}기</span>
                                    <span className="joinObjectTitle">{list.projectName}</span>
                                    <span className="joinObjectPlatform">{list.projectType}</span>
                                    <span className="joinObjectBtn">
                                        <img src={moveBtn} className="moveBtnStyled" />
                                    </span>
                                </div>
                            ))
                    }
                </div>

                <div className="logoutWrapper">
                    <img src={logoutIcon} className="logoutButton" onClick={this.handleLogout} />
                </div>
            </Modal>

        );
    }
}

export default MainMemberInfo;