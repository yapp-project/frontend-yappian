import React, {Component} from 'react';
import './JoinProjectPopup.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class JoinProjectPopup extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="joinPopupMainWrapper">
                <div>x</div>
                <div className="popupTitle">
                    프로젝트 참여하기
                </div>

                <div className="middleIntro">
                    프로젝트에 참여하고 팀원들과 진행상황을 공유하세요!
                </div>

                <div className="undermiddleIntro">
                    초대 코드(네자리 숫자)를 입력해 주세요.
                </div>

                    <div className="inviteCodeWrapper">
                        <input className="inviteCode" placeholder="*" maxLength="1"/>
                        <input className="inviteCode" placeholder="*" maxLength="1"/>
                        <input className="inviteCode" placeholder="*" maxLength="1"/>
                        <input className="inviteCode" placeholder="*" maxLength="1"/>
                    </div>


                <Link to="/url/progress">
                    <div className="submitButton textAlignCenter">
                        <FontAwesomeIcon className="fontInSubmitButton" icon={faCheck}/>
                    </div>
                </Link>

            </div>
        );
    }
}

export default JoinProjectPopup;