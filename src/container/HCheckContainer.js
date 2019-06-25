import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class HCheckContainer extends Component {
    render(){
        return(
            <Redirect to="http://localhost:8085/api/_hcheck"/>
        );
    }
}

export default HCheckContainer;
