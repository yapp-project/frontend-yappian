import React, { Component } from 'react';
import './InsertUrlForm.css';

import submitButton from '../../img/group-10@3x.png'
import {Dropdown, Form} from "semantic-ui-react";
import axios from "axios";


class InsertUrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : '',
            title : '',
            content : '',
            data: [],
            projectIdx : this.props.projectIdx
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleDropdownChange = (e, { value }) => {
        this.setState({
            type: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {type, title, content, projectIdx} = this.state;
        const apiUrl = 'http://localhost:8085/api/project/'+ projectIdx +'/url';

        axios.post(apiUrl, {
            "contents" : content,
            "title" : title,
            "type" : type
        })
            .then(res => {
                this.setState({
                    type: '',
                    title : '',
                    content : ''
                })
                this.props.onSuccessInsert(type, res.data.urlList.filter(list => list.type !== 'TOOL'))
            })
            .catch(error => {
                console.log(error)
            });

    }


    render(){
        const styles = {
            width : '140px',
            padding : '10px 0px 0px -30px',
        };

        const options = [
            { key : 1, text: '1차 데브', value: 'FIRST'},
            { key : 2, text: '2차 데브', value: 'SECOND'},
            { key : 3, text: '홈커밍데이', value: 'HOME'}
        ]


        return (
            <form onSubmit={this.handleSubmit}>
                <div className="insertUrlWrapper">
                    <div className="selectBox">
                        <Dropdown placeholder='선택' clearable options={options} onChange={this.handleDropdownChange} value={this.state.type} />
                    </div>
                    <input name="title" className="taskTitle" placeholder="산출물 제목" onChange={this.handleChange} value={this.state.title} />
                    <input name="content" className="insertUrl" placeholder="Copy and Paste URL" onChange={this.handleChange} value={this.state.content} />
                    <button type="submit" className="buttonStyled">
                        <img className="submitButtonStyled" src={submitButton}/>
                    </button>
                </div>
            </form>
        );
    }
}

export default InsertUrlForm;