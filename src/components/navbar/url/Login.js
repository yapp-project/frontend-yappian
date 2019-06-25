import React, {Component} from 'react'

import './index.css'
import loginBtn from '../../../img/loginBtn.png'


class Login extends Component{
    constructor(props){
        super(props);
    }

    handleLogin = () => {
        //this.props.handleLogin()
        window.location = 'http://localhost:8085/api/login'
    }


    render(){
        return(
            <div className="right">
                <img src={loginBtn} className="loginImg" onClick={this.handleLogin}/>
            </div>
        );
    }
}


export default Login;

