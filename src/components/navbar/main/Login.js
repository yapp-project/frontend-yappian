import React, { Component } from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie';

import './Navbar.css'
import loginBtn from '../../../img/loginBtn.png'

const cookies = new Cookies();

export const testInstance = axios.create({
    baseURL: 'https://localhost:8085/',
    timeout: 180000,
    withCredentials: true
})

class Login extends Component{
    constructor(props){
        super(props);
    }

    responseGoogle = (response, error) => {
        if(error){
            console.log(error)
        }else{
            //console.log(response)
            //cookies.set('SESSION', response.googleId)
            //console.log(cookies.get('SESSION'))
            //console.log(cookies.get('SID'))
            //this.props.handleLogin(response.googleId)



            // const url = '/api/login';
            // testInstance({
            //     method: 'get',
            //     url
            // }).then(response => {
            //     // Do Stuff
            //     console.log(response)
            // }).catch(error => {
            //     console.log(error)
            //     // Do Stuff
            // });

            // axios.get('https://yappian.com/api/login')
            //     .then(res => {
            //         console.log(res)
            //     })
            //     .catch(error => {
            //
            //         console.log(error)
            //     })
            //alert(document.cookie.match(/PHPSESSID=[^;]+/));
        }
    }

    handleThis = () => {
        axios.get('https://yappian.com/api/login')
            .then(res => {
                console.log(res)
            })
            .catch(error => {

                console.log(error)
            })
    }


    render(){
        return(
            <img className="Group" src={loginBtn}  onClick={this.handleThis}/>
        );
    }
}


export default Login;