import React, { Component } from 'react'
import axios from 'axios'

import './Navbar.css'
import loginBtn from '../../../img/loginBtn.png'
class Login extends Component{
    constructor(props){
        super(props);

    }

    onLogin = () => {
        this.props.onLogin();
    }

    handleLogin = () => {
        const apiUrl = `https://localhost:8085/api/login`

        axios.get(apiUrl)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render(){
        return(
            <img className="Group" src={loginBtn} onClick={this.handleLogin}/>
        );
    }
}


export default Login;