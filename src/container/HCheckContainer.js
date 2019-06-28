import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class HCheckContainer extends Component {
    render(){
        return(
            <Redirect to="https://yappian.com/api/_hcheck"/>
        );
    }
}

export default HCheckContainer;
