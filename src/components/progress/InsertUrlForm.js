import React, { Component } from 'react';
import './InsertUrlForm.css';

import submitButton from '../../img/group-10@3x.png'

class InsertUrlForm extends Component {
    render(){
        return (
            <div className="insertUrlWrapper">
                <div className="selectBox">일정 v </div>
                <input className="taskTitle" placeholder="산출물 제목"/>
                <input className="insertUrl" placeholder="Copy and Paste URL"/>
                <img className="submitButtonStyled" src={submitButton}/>
            </div>
        );
    }
}

export default InsertUrlForm;