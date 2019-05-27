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
            finalCheck : this.props.finalCheck
        }
    }

    handleDeleteUrl = (data) => {
        const dataState = this.state.toolIdx
        this.setState({
            toolIdx : data
        })

        const apiUrl = 'http://15.164.13.58:8085/api/project/1/url/'+dataState;

        axios.delete(apiUrl)
            .then(res => {
                    this.handleGetUrl();
                }
            )
            .catch(error => {console.log(error)});
    }

    handleToolUrlClick = (data) => {
        this.setState({
            toolUrl : data
        })
        window.open(this.state.toolUrl)
    }


    render(){
        return (
            (
                this.props.toolList.map((tool, index) => (
                    <div className="programItemWrapper" key={index}>
                        {this.state.login === true && this.state.finalCheck === 'N' ? (
                            <div className="closeIconWrapper" onClick={() => this.handleDeleteUrl(tool.idx)}>
                                <img className="closeIconStyled" src={closeIcon}/>
                            </div>
                        ) : ''}
                        <div className={this.state.login === true && this.state.finalCheck === 'N'? 'centerAligned' : 'mt-10 centerAligned'}  onClick={() => this.handleToolUrlClick(tool.contents)}>
                            {tool.title}
                        </div>
                    </div>
                ))
            )
        );
    }
}


export default ProgramItem;