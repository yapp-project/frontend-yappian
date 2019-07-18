import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import './JoinProjectPopup.css';
import submitButtonImg from "../../img/submit-button.png";
import closeIcon from "../../img/noun-x-1890803@3x.png";
import Modal from "react-modal";

const joinProjectPopupBackground = {
    overlay : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    }
}

class JoinProjectPopup extends Component {
    constructor(props){
        super(props);

        this.state = {
            projectIdx : this.props.projectIdx,
            password : "",
            redirect : false
        }

    }

    componentDidMount() {
        this.setState({
            projectIdx : this.props.projectIdx
        })
        if(this.state.redirect === true){
            this.closeJoinPopup();
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            projectIdx : nextProps.projectIdx
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    onChangeJoinInput = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleJoinSubmit = () => {
        const { projectIdx, password} = this.state;
        const apiUrl = `https://yappian.com/api/project/` + projectIdx;

        axios.post(apiUrl,{
            "password" : password
        })
            .then(res => {
                console.log(res)
                // this.setState({
                //     redirect : true
                // })
                //console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    closeJoinPopup = () => {
        this.props.closeJoinPopup();
    }

    render(){

            return (
                <Modal
                    isOpen={this.props.joinPopup}
                    onRequestClose={this.closeJoinPopup}
                    className="joinPopupMainWrapper" style={joinProjectPopupBackground}
                >

                    <div className="joinHeader">
                        <img src={closeIcon} className="styledJoinCloseIcon" onClick={this.closeJoinPopup}/>
                    </div>
                    <div className="joinTitle">프로젝트 참여하기</div>
                    <div className="joinContent">프로젝트에 참여하고 팀원들과 산출물을 관리하세요!</div>
                    <form onSubmit={this.handleJoinSubmit} className="alignedCenterForm">
                        <div className="codeNoticeWord">초대 코드(네자리 숫자)를 입력해 주세요. </div>
                        <div className="inputBoxesStyled">
                            <input name="password" type="password" className="joinInviteCode" maxLength="4" required onChange={this.onChangeJoinInput}/>
                        </div>
                        <button className="submitButtonInJoin" type="submit">
                            <img src={submitButtonImg} className="submitButtonImg"/>
                        </button>
                    </form>

                </Modal>
            );


    }
}

export default JoinProjectPopup;