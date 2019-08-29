import React, { Component } from 'react'

import './Navbar.css'
import loginBtn from '../../../img/loginBtn.png'


class Login extends Component{

    handleLogin = () => {
        //this.props.handleLogin()
        window.location = 'http://localhost:8085/api/login'

    }


    render(){
        return(
            <img className="Group" src={loginBtn}  onClick={this.handleLogin}/>
        );
    }
}


export default Login;