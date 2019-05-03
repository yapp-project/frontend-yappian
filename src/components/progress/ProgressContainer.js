import React, { Component } from 'react';
import './ProgressContainer.css'
import UsedProgram from './UsedProgram';
import UrlList from './UrlList';

class ProgressContainer extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="ProgressWrapper">
                <div className="ProjectInfo">
                    <label className="text-style-1">14기</label>
                    <label className="marginLabel">|</label>
                    <label className="text-style-1">WEB 1팀</label>
                </div>

                <UsedProgram />
                <UrlList />

            </div>
        );
    }
}

export default ProgressContainer;