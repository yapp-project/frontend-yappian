import React, {Component} from 'react';
import axios from 'axios'

import './JoinProjectPopup.css';
import submitButtonImg from "../../img/submit-button.png";
import closeIcon from "../../img/noun-x-1890803@3x.png";


class JoinProjectPopup extends Component {
    constructor(props){
        super(props);

        this.state = {
            projectIdx : 6,
            code1 : '',
            code2 : '',
            code3 : '',
            code4 : ''
        }

    }

    showJoinPopup = () => {
        this.props.showJoinPopup()
    }

    onChangeJoinInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleJoinSubmit = () => {
        console.log("ok")
        // const { projectIdx, code1, code2, code3, code4 } = this.state;
        // const apiUrl = `http://15.164.13.58:8085/v1/api/project/` + projectIdx
        // axios.post(apiUrl, {
        //     "password" : code1+code2+code3+code4
        // })
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
    render(){
        return (
            <div className="joinPopupMainWrapper">
                <div className="joinHeader">
                    <img src={closeIcon} className="styledJoinCloseIcon" onClick={this.showJoinPopup}/>
                </div>
                <div className="joinTitle">프로젝트 참여하기</div>
                <div className="joinContent">프로젝트에 참여하고 팀원들과 산출물을 관리하세요!</div>
                <form onSubmit={this.handleJoinSubmit} className="alignedCenterForm">
                    <div className="codeNoticeWord">초대 코드(네자리 숫자)를 입력해 주세요. </div>
                    <div className="inputBoxesStyled">
                        <input name="code1" className="joinInviteCode" maxLength="1" onChange={this.onChangeJoinInput}/>
                        <input name="code2" className="joinInviteCode" maxLength="1" onChange={this.onChangeJoinInput}/>
                        <input name="code3" className="joinInviteCode" maxLength="1" onChange={this.onChangeJoinInput}/>
                        <input name="code4" className="joinInviteCode" maxLength="1" onChange={this.onChangeJoinInput}/>
                    </div>
                    <div className="joinCaution">숫자만 입력해 주세요. </div>
                    <button className="submitButtonInJoin" type="submit">
                        <img src={submitButtonImg} className="submitButtonImg"/>
                    </button>
                </form>
            </div>
        );
    }
}

export default JoinProjectPopup;