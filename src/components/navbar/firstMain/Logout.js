import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";


const Logout = () => (
    <div className="leftFlow">
        <div className="CreateNewProject">새 프로젝트 만들기</div>
        <div class="user">
            <FontAwesomeIcon icon={ faUserCircle } className="userIcon"/>
        </div>
    </div>
);


export default Logout;