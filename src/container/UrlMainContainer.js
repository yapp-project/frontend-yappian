import React, {Component} from 'react';
import './UrlMainContainer.css';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import {ProgressContainer, CompleteContainer} from "../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import user from '../img/user-icon-gray@3x.png';
import otherIcon from '../img/invalid-name@3x.png';


class UrlMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 'progress',
            projectIdx : props.match.params.projectIdx
        }
    }


    render(){

        return (
            <div className="urlMainWrapper">
                <div className="topLine"></div>
                <div className="wrapperPadding">
                    <div className="urlNavWrapper">
                        <div className="left">
                                <NavLink to="/" className="urlLogo">
                                    YAPPIAN.
                                </NavLink>
                        </div>
                        <div className="right">
                            <img src={otherIcon} className="otherIcon margin-right" />
                            <img src={user} className="userIcon" />
                        </div>
                    </div>
                    <div className="selectedStateWrapper">
                        <div className={ this.state.selected === 'progress' ? 'activedStateBar' : 'inactivedStateBar'}
                             onClick={() => {this.setState( {selected : 'progress'})}}>
                            PROGRESS
                        </div>
                        <div className={this.state.selected === 'complete' ? 'activedStateBar' : 'inactivedStateBar'}
                             onClick={() => {this.setState( {selected : 'complete'})}}>
                            COMPLETE
                        </div>
                    </div>
                    <div className="stateWrapper">
                        {this.state.selected === 'progress' ? <ProgressContainer projectIdx={this.state.projectIdx}/> : <CompleteContainer projectIdx={this.state.projectIdx}/>}
                    </div>



                </div>

            </div>
        );
    }
}

export default UrlMainContainer;