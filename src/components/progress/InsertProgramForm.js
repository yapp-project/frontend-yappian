import React, { Component } from 'react';
import './InsertProgramForm.css';

import submitButton from '../../img/group-10@3x.png';
import axios from "axios";

class InsertProgramForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            toolName : '',
            url : '',
            toolList : []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {toolName, url} = this.state;
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url';

        axios.post(apiUrl, {
            "contents" : url,
            "title" : toolName,
            "type" : "TOOL"
        })
            .then(res => {
                this.setState({
                    toolName: '',
                    url : '',
                    toolList : res.data.data
                })
            })
            .catch(error => {
                console.log(error)
            });


    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="insertProgramFormWrapper">
                    <input name="toolName" className="insertToolName" placeholder="tool name" onChange={this.handleChange} value={this.state.toolName} />
                    <input name="url" className="insertUrl" placeholder="Copy and Paste URL" onChange={this.handleChange} value={this.state.url}/>
                    <button type="submit" className="buttonStyled">
                        <img className="submitButtonStyled" src={submitButton}/>
                    </button>
                </div>
            </form>

        );
    }
}

export default InsertProgramForm;


