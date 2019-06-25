import React, { Component } from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'

import './Navbar.css'
import loginBtn from '../../../img/loginBtn.png'


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            cookie : ''
        }
    }

    // getUrl = async () => {
    //     try {
    //         const res = await API.get(`/go`);
    //         window.location = res.data.redirectUrl;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    handleThis = () => {
        // try {
        //     const res = await axios.get('http://localhost:8085/api/login')
        //     console.log(res.data.status)
        // }catch (e) {
        //     console.log(e)
        //     window.location = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=571755016264-5itf6g6p8jer881uk229gj2o7guihp4r.apps.googleusercontent.com&redirect_uri=http://yappian.com/api/login&response_type=code&scope=email%20profile&state=cqe7J2'
        // }

        // axios({
        //     method: 'get',
        //     url: 'http://localhost:8085/api/login'
        // })
        // axios.get('http://localhost:8085/api/login', {
        //     headers : {
        //         'Access-Control-Allow-Origin' : '*',
        //         'Content-Type' : 'application/json'
        //     }
        //     //withCredentials : true
        // })
        //     .then(res => {
        //         //console.log(res)
        //         console.log(res)
        //         this.handleLogin()
        //     })
        //     .catch(error => {
        //         //cookies.get("SESSION")
        //         //console.log(cookies.get("SESSION"))
        //         this.handleLogin()
        //         console.log(error.status)
        //     })
        // const req = new XMLHttpRequest();
        // req.open('GET','http://localhost:8085/api/login', true);
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

        //this.handleLogin()
    }

    handleLogin = () => {
        //this.props.handleLogin()
        window.location = 'http://localhost:8085/api/login'

    }


    render(){
        return(
            <img className="Group" src={loginBtn}  onClick={this.handleLogin}/>
        );
    }
}


export default Login;