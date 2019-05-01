import React, { Component } from 'react';
import './InsertProgramForm.css';

import submitButton from '../../img/group-10@3x.png';

const InsertProgramForm = () => (
    <div className="insertProgramFormWrapper">
        <input className="insertToolName" placeholder="tool name"/>
        <input className="insertUrl" placeholder="Copy and Paste URL"/>
        <img className="submitButtonStyled" src={submitButton}/>
    </div>
)

export default InsertProgramForm;