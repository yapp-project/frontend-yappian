import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


import {ProgressContainer, CompleteContainer} from "../components";
import Logout from '../components/navbar/url/Logout'
import Login from '../components/navbar/url/Login'

import './UrlMainContainer.css';

import logoOnUrl from '../img/logo-on-url.png'
import CompletePopup from '../components/popup/CompletePopup'
import JoinProjectPopup from "../components/popup/JoinProjectPopup";


class UrlMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : '',
            projectIdx : props.match.params.projectIdx,
            finalCheck : '',
            login : false,
            errorRedirect : false,
            complete : false,
            join : false,
            redirect : false
        }
    }

    componentWillMount() {
        this.getSession()
    }

    componentDidMount() {
        //this.getSession()
        this.handleGetFinalCheck()
    }


    handleGetFinalCheck = () => {
        const apiUrl = `http://localhost:8085/api/project/` + this.state.projectIdx + `/finish`

        axios.get(apiUrl)
            .then(res => {
                if(res.data.fileList.length === 0){
                     this.setState({
                         selected : 'progress',
                         finalCheck : 'N'
                     })
                }else {
                    this.setState({
                        selected : 'complete',
                        finalCheck : 'Y'
                    })
                }
            })
            .catch(error => {
                if(error.response) {
                    this.setState({
                        errorRedirect : true
                    })
                }
            })
    }

    handleLogin = (status) => {
        this.setState({
            login: status
        })
    }

    getSession = () => {
        axios.get('http://localhost:8085/session')
            .then(res => {
                console.log(res.data)
                if(res.data == 'ANONYMOUS'){
                    this.handleLogin(false)
                }else{
                    this.handleLogin(true)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    completePopup = () => {
        this.setState({
            complete : !this.state.complete
        })
    }

    joinPopup = () => {
        this.setState({
            join : !this.state.join
        })
    }

    redirectToUrl = () => {
        this.setState({
            redirect : !this.state.redirect
        })
    }

    render(){
        if (this.state.errorRedirect === true){
            return(
                <Redirect to="/error" />
            );
        }

        if(this.state.redirect === true){
            return(
                <Redirect to={"main/"+ this.state.projectIdx}/>
            );
        }
        return (
            <div className="urlMainWrapper">
                <div className="topLine"></div>
                <div className="wrapperPadding">
                    <div className="urlNavWrapper">
                        <div className="left">
                            <img src={logoOnUrl} className="urlLogo" onClick={() => {window.location = 'http://localhost:8085/'}}/>
                        </div>
                        {this.state.login === true ?
                            (<Logout projectIdx={this.state.projectIdx} completePopup={this.completePopup} joinPopup={this.joinPopup} finalCheck={this.state.finalCheck} redirectToUrl={this.redirectToUrl}/>) : ( <Login />)
                        }
                    </div>
                    <div className="selectedStateWrapper">
                        <div className={ this.state.selected === 'progress' ? 'activedStateBar' : 'inactivedStateBar'}
                             onClick={() => {this.setState( {selected : 'progress'})}}>
                            PROGRESS
                        </div>
                        {this.state.finalCheck === 'Y' ? (
                            <div className={this.state.selected === 'complete' ? 'activedStateBar' : 'inactivedStateBar'}
                                 onClick={() => {this.setState( {selected : 'complete'})}}>
                                COMPLETE
                            </div>
                        ) : ''}

                    </div>
                    <div className="stateWrapper">
                        {this.state.selected === 'progress' ? <ProgressContainer login={this.state.login} projectIdx={this.state.projectIdx} finalCheck={this.state.finalCheck}/> : <CompleteContainer projectIdx={this.state.projectIdx}/>}
                    </div>
                </div>
                {this.state.complete === true ?
                    (<CompletePopup projectIdx={this.state.projectIdx} completePopup={this.completePopup}/>) : ''
                }
                {this.state.join === true ?
                    (<JoinProjectPopup projectIdx={this.state.projectIdx} completePopup={this.completePopup} joinPopup={this.joinPopup}/>) : ''
                }
            </div>
        );
    }


}

export default UrlMainContainer;