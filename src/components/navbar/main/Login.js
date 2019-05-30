import React, { Component } from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie';

import './Navbar.css'
import loginBtn from '../../../img/loginBtn.png'

const cookies = new Cookies();


class Login extends Component{
    constructor(props){
        super(props);
    }


    handleThis = () => {
        // axios({
        //     method: 'get',
        //     url: 'https://yappian.com/api/login'
        // })
        axios.get('https://yappian.com/api/login', {
            headers : {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
            //withCredentials : true
        })
            .then(res => {
                //console.log(res)
                console.log(res)
                this.handleLogin()
            })
            .catch(error => {
                //cookies.get("SESSION")
                //console.log(cookies.get("SESSION"))
                this.handleLogin()
                console.log(error.status)
            })
        // const req = new XMLHttpRequest();
        // req.open('GET','https://yappian.com/api/login', true);
        // //req.withCredentials = true
        // req.setRequestHeader('Access-Control-Allow-Origin', '*')
        // req.setRequestHeader('Content-Type', 'application/json')
        // req.onload = () => {
        //     if (req.readyState === 4) {
        //         if (req.status === 200) {
        //             const json_obj = JSON.parse(req.responseText);
        //             console.log(json_obj)
        //             this.handleLogin()
        //         } else {
        //             console.error(req.statusText);
        //             this.handleLogin()
        //         }
        //     }
        // }
        // req.onerror = () => {
        //     console.error(req.statusText);
        // }
        // req.send(null);
    }

    handleLogin = () => {
        this.props.handleLogin()
    }




    render(){
        return(
            <img className="Group" src={loginBtn}  onClick={this.handleThis}/>
        );
    }
}


export default Login;