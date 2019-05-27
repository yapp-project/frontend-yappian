import React from 'react'

import './index.css'
import loginBtn from '../../../img/loginBtn.png'

const Login = () => {
    return(
        <div className="right">
            <img src={loginBtn} className="loginImg"/>
        </div>
    );
}

export default Login;