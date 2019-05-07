import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CreateProjectPopup.css';

import closeIcon from '../../img/noun-x-1890803@3x.png'
import submitButtonImg from '../../img/submit-button.png'
import {Dropdown} from "semantic-ui-react";

const options = [
    { key: 1, text: '13기', value: "13" },
    { key: 2, text: '14기', value: "14" },
]

class CreateProjectPopup extends Component{
    constructor(props){
        super(props);
    }

    showCreatePopup = () => {
        this.props.showCreatePopup()
    }

    render(){
        return(
            <div className="popupWrapper">
                <div className="popupFrame">
                    <div className="header">
                        <img src={closeIcon} className="styledCloseIcon"  onClick={this.showCreatePopup}/>
                    </div>
                    <div className="createProjectPopupInfo">
                        <div className="createProjectTitle">
                            새 프로젝트 만들기
                        </div>
                        <div className="underTitleAtCreate">
                            YAPP의 새로운 프로젝트를 만드세요!
                        </div>
                    </div>
                    <form>
                        <div className="styledCreateProjectForm">
                            <div className="selectGisu">
                                기수 선택 v
                            </div>
                            <input className="inputProjectName" placeholder="프로젝트 이름" />
                            <div>

                            </div>
                            <div className="platformWrapper">
                                <div className="notSelectedPlatformBtn m-rightInPlatform" name="ios">ios</div>
                                <div className="notSelectedPlatformBtn m-rightInPlatform" name="android">Android</div>
                                <div className="selectedPlatformBtn" name="web">Web</div>
                            </div>
                            <div className="codeWrapper">
                                <div className="codeInfoTitle">초대 코드(네자리 숫자)를 생성해 주세요. </div>
                                <div className="insertCodeWrapper">
                                    <input className="insertCodeObject m-rightInInsertCode" />
                                    <input className="insertCodeObject m-rightInInsertCode" />
                                    <input className="insertCodeObject m-rightInInsertCode" />
                                    <input className="insertCodeObject" />
                                </div>
                                <div className="insertCodeCaution">숫자만 입력해 주세요. </div>
                            </div>
                            <Link to="/progress">
                                <div className="submitCreateProjectForm">
                                    <img src={submitButtonImg} className="submitButtonImg"/>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateProjectPopup;