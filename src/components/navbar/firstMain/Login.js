import React, { Component } from 'react'
import './Navbar.css'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { BrowserRouter as LinkButton, Link } from 'react-router-dom'
import logo from '../../../img/googleLogo.png'
import loginBtn from '../../../img/loginBtn.png'
class Login extends Component{
    constructor(props){
        super(props);

    }

    onLogin = () => {
        this.props.onLogin();
    }


    render(){
        return(
                <Modal size="tiny" trigger={<Image className="Group" src={loginBtn} />}>
                    <Modal.Header>구글 로그인</Modal.Header>
                    <Modal.Content>
                        <div className="center flex1">
                            <div className="googleLogo">
                                <Image wrapped size='small' src={logo} />
                            </div>
                            <Button content='Google 로그인' primary onClick={this.onLogin}/>
                        </div>
                    </Modal.Content>
                </Modal>
        );
    }
}


export default Login;