import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

export default class TestMainContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            viewState : 'progress'
        }
    }

    handleSuccess = () => {

    }


    render() {
        return (
            <GoogleLogin clientId="571755016264-5itf6g6p8jer881uk229gj2o7guihp4r.apps.googleusercontent.com" onSuccess={this.handleSuccess} buttonText="Login"/>
        );
    }
}