import React, {Component} from 'react';
import './UrlMainContainer.css';
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';
import {ProgressContainer, CompleteContainer} from "../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

class UrlMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : props.match.params.project_state
        }
    }


    render(){

        return (
            <div className="urlMainWrapper">
                <div className="topLine"></div>
                <div className="wrapperPadding">
                    <div className="urlNavWrapper">
                        <div className="left">
                            <div className="urlLogo">YAPPIAN.</div>
                        </div>
                        <div className="right colorIcon">
                            <FontAwesomeIcon className="navIcon margin-right" icon={faCaretDown}/>
                            <FontAwesomeIcon className="navIcon" icon={faUserCircle}/>
                        </div>
                    </div>
                    <div className="selectedStateWrapper">

                    </div>
                    <div className="others">
                        {this.state.selected === 'progress' ? <ProgressContainer /> : <CompleteContainer />}
                    </div>



                </div>

            </div>
        );
    }
}

export default UrlMainContainer;