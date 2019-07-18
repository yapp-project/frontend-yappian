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
            completePopup : false,
            join : false,
            redirect : false,
            joinMember : false,
            projectObject : {},

        }

    }


    componentDidMount() {
        this.handleGetFinalCheck(this.state.projectIdx)
        this.getProgressProject(this.state.projectIdx)
        this.getSession()
        this.confirmJoinMember()

    }

    componentWillReceiveProps(nextProps){
        this.handleGetFinalCheck(nextProps.match.params.projectIdx)
        this.getProgressProject(nextProps.match.params.projectIdx)
        this.setState({
            projectIdx : nextProps.match.params.projectIdx
        })
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    handleGetFinalCheck = (projectIdx) => {
        //alert(projectIdx)
        const apiUrl = `https://yappian.com/api/project/` + projectIdx + `/finish`

        axios.get(apiUrl)
            .then(res => {
                if(res.data.fileList.length === 0){

                     this.setState({
                         selected : 'progress',
                         finalCheck : 'N'
                     })
                }else {
                    //this.getCompleteProject(projectIdx)

                    this.setState({
                        selected : 'complete',
                        finalCheck : 'Y'
                    })
                }
            })
            .catch(error => {
                if(error.response) {
                    this.handleError()
                }
            })
    }

    handleError = () => {
        this.setState({
            errorRedirect : true
        })
    }

    handleLogin = (status) => {
        this.setState({
            login: status
        })
    }

    getSession = () => {
        axios.get('https://yappian.com/session')
            .then(res => {
                //console.log(res.data)
                if(res.data == 'ANONYMOUS' || res.data == 'INVALID'){
                    this.handleLogin(false)
                }else{
                    this.handleLogin(true)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    // completePopup = () => {
    //     this.setState({
    //         complete : !this.state.complete
    //     })
    // }

    joinPopup = () => {
        this.setState({
            join : !this.state.join
        })
    }

    redirectToUrl = (idx) => {
        window.location='https://yappian.com/#/main/' + idx
        this.handleGetFinalCheck(idx)
        this.setState({
            projectIdx : idx
        })
    }


    confirmJoinMember = () => {
        const {projectIdx} = this.state;
        axios.get(`https://yappian.com/api/user/projects`)
            .then(res => {
                res.data.map((list, index) => {


                    if(parseInt(this.state.projectIdx) === list.idx){
                        this.setState({
                            joinMember : true
                        })
                    }
                })


            })
            .catch(error => {
                console.log(error)
            })
    }

    getProgressProject = (projectIdx) => {
        // const {projectIdx} = this.state;
        const apiUrl = `https://yappian.com/api/project/`+ projectIdx;

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    projectObject: res.data
                })
            })
            .catch(error => {
                console.log(error)
                this.handleError()
            })
    }

    openCompletePopup = () => {
        //alert('12')
        this.setState({
            completePopup : true
        })
    }

    closeCompletePopup = () => {
        this.setState({
            completePopup : false
        })
    }


    render(){
        const {errorRedirect, redirect, projectIdx, login, finalCheck,  joinMember, selected, projectObject} = this.state;

        if (errorRedirect === true){
            return(
                <Redirect to="/error" />
            );
        }

        return (
            <div className="urlMainWrapper">
                <div className="topLine"></div>
                <div className="wrapperPadding">
                    <div className="urlNavWrapper">
                        <div className="left">
                            <Link to="/"><img src={logoOnUrl} className="urlLogo"/></Link>
                        </div>
                        {login === true ?
                            (<Logout projectIdx={projectIdx}
                                     joinPopup={this.joinPopup}
                                     finalCheck={finalCheck}
                                     redirectToUrl={this.redirectToUrl}
                                     login={login}
                                     joinMember={joinMember}
                                     openCompletePopup={this.openCompletePopup}
                                     closeCompletePopup={this.closeCompletePopup}
                                     completePopup={this.state.completePopup}

                            />) : ( <Login />)
                        }
                    </div>
                    <div className="selectedStateWrapper">
                        <div className={ selected === 'progress' ? 'activedStateBar' : 'inactivedStateBar'}
                             onClick={() => {this.setState( {selected : 'progress'})}}>
                            PROGRESS
                        </div>
                        {finalCheck === 'Y' ? (
                            <div className={selected === 'complete' ? 'activedStateBar' : 'inactivedStateBar'}
                                 onClick={() => {this.setState( {selected : 'complete'})}}>
                                COMPLETE
                            </div>
                        ) : ''}

                    </div>
                    <div className="stateWrapper">
                        {selected === 'progress' ?
                            <ProgressContainer projectObject={projectObject}
                                               login={login} projectIdx={projectIdx} finalCheck={finalCheck} joinMember={joinMember}/> :
                            <CompleteContainer projectIdx={projectIdx} finalCheck={finalCheck} handleError={this.handleError}/>}
                    </div>
                </div>
                {this.state.complete === true ?
                    (<CompletePopup projectIdx={projectIdx} completePopup={this.completePopup}/>) : ''
                }
                {this.state.join === true ?
                    (<JoinProjectPopup projectIdx={projectIdx} completePopup={this.completePopup} joinPopup={this.joinPopup}/>) : ''
                }
            </div>
        );
    }


}

export default UrlMainContainer;