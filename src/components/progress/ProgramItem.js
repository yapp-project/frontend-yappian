import React, { Component } from 'react';
import './ProgramItem.css';

import closeIcon from '../../img/group-5@3x.png'

class ProgramItem extends Component {
    render(){
        return (
            <div className="programItemWrapper">
                <div className="closeIconWrapper">
                    <img className="closeIconStyled" src={closeIcon}/>
                </div>
                <div className="centerAligned">
                    SLACK
                </div>
            </div>
        );
    }
}

export default ProgramItem;