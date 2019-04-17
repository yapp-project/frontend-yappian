import React, {Component} from 'react';
import './Navbar.css';
import Login from './Login';
import Logout from './Logout';


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state= {
            login : 1 //0 : 로그아웃상태, 1: 로그인 상태
        }
    }


    render(){
        return(
            <div className="navbar">
                <div className="left">
                    <div className="YAPPIAN-Copy">YAPPIAN.</div>
                </div>
                <div className="right">
                    {this.state.login === 0 ? <Login /> : <Logout />}
                </div>
            </div>
        );
    }
}


export default Navbar;