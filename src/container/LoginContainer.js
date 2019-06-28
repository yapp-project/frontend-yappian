import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class LoginContainer extends Component {
    render(){
        return(
            <Redirect to="https://yappian.com/api/login"/>
        );
    }
}

export default LoginContainer;
