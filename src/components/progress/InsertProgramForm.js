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
            toolList : [],
            projectIdx : this.props.projectIdx
        }
    }

    componentDidMount() {
        this.setState({
            projectIdx : this.props.projectIdx
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            projectIdx : nextProps.projectIdx
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {toolName, url, projectIdx} = this.state;


            const apiUrl = `https://yappian.com/api/project/`+ projectIdx +`/url`;

            axios.post(apiUrl, {
                "contents" : url,
                "title" : toolName,
                "type" : "TOOL"
            })
                .then(res => {
                    this.setState({
                        toolName: '',
                        url : ''
                    })
                    this.props.onSuccessInsert('TOOL', res.data.urlList.filter(list => list.type==='TOOL'))
                })
                .catch(error => {
                    console.log(error)
                });

    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="insertProgramFormWrapper">
                    <input name="toolName" className="insertToolName" required placeholder="tool name" onChange={this.handleChange} value={this.state.toolName} />
                    <input name="url" className="insertUrl" required placeholder="Copy and Paste URL" onChange={this.handleChange} value={this.state.url}/>
                    <button type="submit" className="buttonStyled">
                        <img className="submitButtonStyled" src={submitButton}/>
                    </button>
                </div>
            </form>

        );
    }
}

export default InsertProgramForm;



