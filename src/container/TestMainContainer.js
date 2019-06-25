import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './TestMainContainer.css';
import TestCreateProjectModal from './TestCreateProjectModal'
import closeIcon from "../img/noun-x-1890803@3x.png";
import {Dropdown} from "semantic-ui-react";
import submitButtonImg from "../img/submit-button.png";
import OtherPopup from "../components/navbar/url/Logout";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '505px',
        height                : '538px',

    }
};




class TestMainContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalsOpen: false,
            otherPopup : false
        };

    }

    openOtherPopup = () => {
        this.setState({
            otherPopup : true
        })
    }

    closeOtherPopup = () => {
        this.setState({
            otherPopup : false
        })
    }




    render(){
        return(
            <div>
                <button onClick={this.openOtherPopup}>Open Modal</button>
                <div className="toCenterModal">
                    <OtherPopup
                        openOtherPopup={this.openOtherPopup}
                        closeOtherPopup={this.closeOtherPopup}
                        otherPopup={this.state.otherPopup}/>
                </div>


            </div>
        );
    }

}

export default TestMainContainer;