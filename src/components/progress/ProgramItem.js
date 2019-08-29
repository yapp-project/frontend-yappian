import React, { Component } from 'react';
import './ProgramItem.css';

import closeIcon from '../../img/close-tool.png'
import axios from "axios";

class ProgramItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            toolUrl : '',
            toolIdx : 0,
            login : this.props.login,
            finalCheck : this.props.finalCheck,
            projectIdx : this.props.projectIdx,
            joinMember : this.props.joinMember
        }
    }

    componentDidMount() {
        this.setState({
            login : this.props.login,
            projectIdx : this.props.projectIdx,
            finalCheck : this.props.finalCheck,
            joinMember : this.props.joinMember
        })
    }

    componentWillReceiveProps(nextProps){
        //console.log(JSON.stringify(nextProps.defaultGisu))
        this.setState({
            login : nextProps.login,
            projectIdx : nextProps.projectIdx,
            finalCheck : nextProps.finalCheck,
            joinMember : nextProps.joinMember
        })
    }


    handleDeleteUrl = (data) => {
        const { projectIdx } = this.state;
        const apiUrl = `http://localhost:8085/api/project/` + projectIdx + `/url/`+data;

        axios.delete(apiUrl)
            .then(res => {
                    this.handleGetUrl(projectIdx);
                }
            )
            .catch(error => {console.log(error)});
    }

    handleGetUrl = (projectIdx) => {
        this.props.handleGetUrl(projectIdx);
    }


    handleToolUrlClick = (data) => {
        window.location = data
    }


    render(){
        return (
            (
                this.props.toolList.map((tool, index) => (
                    <div className="programItemWrapper" key={index}>
                        {this.state.login === true && this.state.finalCheck === 'N' ? (
                            <div className={this.state.joinMember === false ? 'hideThis closeIconWrapper' : "closeIconWrapper"} onClick={() => this.handleDeleteUrl(tool.idx)}>
                                <img className="closeIconStyled" src={closeIcon}/>
                            </div>
                        ) : ''}
                        <div className={
                            this.state.login === true && this.state.finalCheck === 'N' ?
                                'centerAligned'
                                :
                                'centerAligned toCenterTitle'
                                }
                             onClick={() => this.handleToolUrlClick(tool.contents)}>
                            {tool.title}
                        </div>
                    </div>
                ))
            )
        );
    }
}


export default ProgramItem;