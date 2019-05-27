import React, {Component} from 'react';
import './Navbar.css';
import Login from './Login';
import Logout from './Logout';


class Navbar extends Component{

    render(){
        return(

            <div className="navbar">
                <div className="left">
                    <div className="YAPPIAN-Copy">YAPPIAN.</div>
                </div>
                <div className="right">

                </div>
            </div>
        );
    }
}

export default Navbar;