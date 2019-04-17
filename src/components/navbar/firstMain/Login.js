import React from 'react'
import './Navbar.css'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { BrowserRouter as LinkButton, Link } from 'react-router-dom'
import logo from '../../../img/googleLogo.png'
import loginBtn from '../../../img/loginBtn.png'

const Login = () => (
    <div className="loginBtn">
        <Modal size="tiny" trigger={<Image className="Group" src={loginBtn} />}>
            <Modal.Header>구글 로그인</Modal.Header>
            <Modal.Content>
                <div className="center flex1">
                    <div className="googleLogo">
                        <Image wrapped size='small' src={logo} />
                    </div>
                    <Button content='Google 로그인' primary/>
                </div>
            </Modal.Content>
        </Modal>
    </div>


);

export default Login;