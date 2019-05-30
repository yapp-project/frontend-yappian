import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class H2Container extends Component {
    render(){
        return(
            <Redirect to="http://www.naver.com"/>
        );
    }
}

export default H2Container;
