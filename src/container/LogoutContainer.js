import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class LogoutContainer extends Component {
    render(){
        return(
            <Redirect to="https://yappian.com/api/logout"/>
        );
    }
}

export default LogoutContainer;
