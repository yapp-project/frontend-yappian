import React, {Component} from 'react';
import './CompletePopup.css';
import {Link} from "react-router-dom"
import { Button, Checkbox, Form } from 'semantic-ui-react'


class CompletePopup extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="completePopupWrapper">
                <div className="completeTitle">프로젝트 완료하기</div>
                <div className="CompleteMiddleIntro">YAPPIAN 여러분! 프로젝트 완료를  축하합니다.</div>
                <div className="">
                    <input className="insertUrlWrapper" placeholder='프로젝트 URL' />
                </div>
                    <div className="introduceTitle">프로젝트 소개</div>
            </div>
        );
    }
}

export default CompletePopup;