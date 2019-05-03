import React, { Component } from 'react';
import './ProgramItem.css';

import closeIcon from '../../img/group-5@3x.png'
import axios from "axios";

class ProgramItem extends Component {
    constructor(props){
        super(props);
    }

    handleDeleteUrl = (data) => {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url/'+data;

        axios.delete(apiUrl)
            .then(res => {
                    this.handleGetUrl();
                }
            )
            .catch(error => {console.log(error)});
    }


    render(){
        return (
            (
                this.props.toolList.map((tool, index) => (
                    <div className="programItemWrapper">
                        <div className="closeIconWrapper" onClick={() => this.handleDeleteUrl(tool.idx)}>
                            <img className="closeIconStyled" src={closeIcon}/>
                        </div>
                        <div className="centerAligned">
                            {tool.title}
                        </div>
                    </div>
                ))
            )

        );
    }
}


export default ProgramItem;