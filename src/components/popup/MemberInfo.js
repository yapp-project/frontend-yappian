import React, {Component} from 'react';
import axios from 'axios'
import './MemberInfo.css';
import logoutIcon from '../../img/logoutIcon.png'
import moveBtn from '../../img/stroke-1@3x.png'
import { Link } from 'react-router-dom'
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

class MemberInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            memberjoinList : []
        }

    }

    componentDidMount() {
        this.handleGetJoinProject()
    }

    handleGetJoinProject = () => {
        axios.get('http://localhost:8085/api/user/projects')
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
        window.location = 'http://localhost:8085/api/logout'
    }

    openMemberInfoPopup = () => {
        this.props.openMemberInfoPopup();
    }

    closeMemberInfoPopup = () => {
        this.props.closeMemberInfoPopup();
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
                    {
                        this.state.memberjoinList.length <= 0
                            ?
                            <div className="alignCenterNoJoin">참여한 프로젝트 없음</div>
                            :
                            this.state.memberjoinList.map((list, i) => (
                                <div className="joinObjectWrapper" key={i} onClick={() => {window.location = 'http://localhost:8085/#/main/'+list.idx}}>
                                    <span className="joinObject mr-3">{list.orderNumber}기</span>
                                    <span className="joinObject mr-3">|</span>
                                    <span className="joinObject mr-3">{list.projectName}</span>
                                    <span className="joinObject mr-3">|</span>
                                    <span className="joinObject mr-3">{list.projectType}</span>
                                    <img src={moveBtn} className="moveBtnStyled" />
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

export default MemberInfo;