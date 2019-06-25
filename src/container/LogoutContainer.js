import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class LogoutContainer extends Component {
    render(){
        return(
            <Redirect to="http://localhost:8085/api/logout"/>
        );
    }
}

export default LogoutContainer;
