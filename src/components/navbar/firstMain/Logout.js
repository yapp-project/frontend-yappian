import React , {Component} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";
import CreatePopupWrapper from "../../popup/CreatePopupWrapper";

class Logout extends Component {

    render(){
        return (
            <div className="leftFlow">
                <CreatePopupWrapper />
                <div className="user">
                    <FontAwesomeIcon icon={faUserCircle} className="userIcon"/>
                </div>
            </div>
        );
    }
}

export default Logout;