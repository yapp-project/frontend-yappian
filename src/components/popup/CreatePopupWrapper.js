import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Button, Modal } from 'semantic-ui-react';

import './CreatePopupWrapper.css';
import {Dropdown} from "semantic-ui-react";

const options = [
    { key: 1, text: '13기', value: "13" },
    { key: 2, text: '14기', value: "14" },
]

class CreatePopupWrapper extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit = () => {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project'

        axios.post(apiUrl, {
            "ordersIdx": 4,
            "password": "1414",
            "projectName": "hello1",
            "projectType": "ANDROID"
        })
            .then(
                console.log("성공")
            )
            .catch(error => {
                console.log(error)
            });
    }

    render(){
        return(
            <div className="CreateWrapper">
                <div className="header" >
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <div className="headerTitle">
                    새 프로젝트 만들기
                </div>
                <div className="middle">
                    YAPP의 새로운 프로젝트를 만드세요!
                </div>


                <form onSubmit={this.handleSubmit}>
                    <div className="formWrapper">
                        <div className="selectBox textAlignCenter">
                            <div className="selectBoxText">
                                <Dropdown text='기수선택'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='13기' value="13"/>
                                        <Dropdown.Item text='14기' value="14"/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <input className="projectNameTextField" placeholder="프로젝트 이름"/>
                        <div className="platformWrapper">
                            <div className="platformButtonWapper platformButtonNoneSelected textAlignCenter">
                                <div className="platformButton platformButtonNoneSelectedFont">IOS</div>
                            </div>
                            <div className="platformButtonWapper platformButtonNoneSelected textAlignCenter">
                                <div className="platformButton platformButtonNoneSelectedFont">ANDROID</div>
                            </div>
                            <div className="platformButtonWapper platformButtonSelected textAlignCenter">
                                <div className="platformButton platformButtonSelectedFont">WEB</div>
                            </div>
                        </div>
                        <div className="inviteCodeInfo">초대 코드(네자리 숫자)를 생성해 주세요.</div>
                        <div className="inviteCodeWrapper">
                            <input className="inviteCode" placeholder="*" maxLength="1"/>
                            <input className="inviteCode" placeholder="*" maxLength="1"/>
                            <input className="inviteCode" placeholder="*" maxLength="1"/>
                            <input className="inviteCode" placeholder="*" maxLength="1"/>
                        </div>
                    </div>
                    <Link to="/progress">
                        <div className="submitButton textAlignCenter">
                            <FontAwesomeIcon className="fontInSubmitButton" icon={faCheck}/>
                        </div>
                    </Link>
                </form>

            </div>
        )
    }
}


export default CreatePopupWrapper;