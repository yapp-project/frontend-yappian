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
            projectObject: this.props.projectObject,
            login: this.props.login,
            finalCheck: this.props.finalCheck,
            joinMember: this.props.joinMember
        }
        //this.getProject(this.props.projectIdx)
    }

    componentDidMount() {
        this.setState({
            projectIdx: this.props.projectIdx,
            projectObject: this.props.projectObject,
            login: this.props.login,
            joinMember : this.props.joinMember,
            finalCheck: this.props.finalCheck
        })
    }

    componentWillReceiveProps(nextProps){
        //this.getProject(nextProps.projectIdx)
            this.setState({
                projectObject: nextProps.projectObject,
                projectIdx : nextProps.projectIdx,
                login : nextProps.login,
                joinMember : nextProps.joinMember,
                finalCheck: nextProps.finalCheck
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }



    // getProject = (projectIdx) => {
    //     // const {projectIdx} = this.state;
    //     const apiUrl = `http://localhost:8085/api/project/`+ projectIdx;
    //
    //     axios.get(apiUrl)
    //         .then(res => {
    //             this.setState({
    //                 projectObject: res.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             this.handleError()
    //         })
    // }


    render(){
        const {projectObject, login, projectIdx, finalCheck, joinMember} = this.state;
        return (
            <div className="ProgressWrapper">
                <div className="ProjectInfo">
                    <label className="text-style-1">
                        {projectObject.orderNumber}기
                    </label>
                    <label className="marginLabel">|</label>
                    <label className="text-style-1">
                        {projectObject.projectType} {projectObject.projectName}
                    </label>
                </div>
                <UsedProgram login={login} projectIdx={projectIdx} finalCheck={finalCheck} joinMember={joinMember} />
                <UrlList login={login} projectIdx={projectIdx} finalCheck={finalCheck} joinMember={joinMember}/>
            </div>
        );
    }
}

export default ProgressContainer;