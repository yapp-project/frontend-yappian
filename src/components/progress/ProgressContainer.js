import React, { Component } from 'react';
import './ProgressContainer.css'
import UsedProgram from './UsedProgram';
import UrlList from './UrlList';

import axios from 'axios'

class ProgressContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            projectIdx: this.props.projectIdx,
            projectObject: {},
            login: this.props.login,
            finalCheck: this.props.finalCheck,
            joinMember: this.props.joinMember
        }
    }

    componentDidMount() {
        this.getProject()
    }

    getProject = () => {
        const apiUrl = `http://localhost:8085/api/project/`+ this.state.projectIdx;

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    projectObject: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return (
            <div className="ProgressWrapper">
                <div className="ProjectInfo">
                    <label className="text-style-1">
                        {this.state.projectObject.orderNumber}기
                    </label>
                    <label className="marginLabel">|</label>
                    <label className="text-style-1">
                        {this.state.projectObject.projectType} {this.state.projectObject.projectName}
                    </label>
                </div>
                <UsedProgram login={this.state.login} projectIdx={this.state.projectIdx} finalCheck={this.state.finalCheck} joinMember={this.state.joinMember}/>
                <UrlList login={this.state.login} projectIdx={this.state.projectIdx} finalCheck={this.state.finalCheck} joinMember={this.state.joinMember}/>
            </div>
        );
    }
}

export default ProgressContainer;