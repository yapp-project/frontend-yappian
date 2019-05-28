import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import {ProgressContainer, CompleteContainer} from "../components";
import Logout from '../components/navbar/url/Logout'
import Login from '../components/navbar/url/Login'

import './UrlMainContainer.css';

import logoOnUrl from '../img/logo-on-url.png'

class UrlMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : '',
            projectIdx : props.match.params.projectIdx,
            finalCheck : '',
            login : true,
            errorRedirect : false
        }
    }



    componentDidMount() {
        this.handleGetFinalCheck()
    }


    handleGetFinalCheck = () => {
        const apiUrl = `https://yappian.com/api/project/` + this.state.projectIdx + `/finish`

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

    render(){
        if (this.state.errorRedirect === true){
            return(
                <Redirect to="/error" />
            );
        }else{
            return (
                <div className="urlMainWrapper">
                    <div className="topLine"></div>
                    <div className="wrapperPadding">
                        <div className="urlNavWrapper">
                            <div className="left">
                                <Link to="/">
                                    <img src={logoOnUrl} className="urlLogo"/>
                                </Link>
                            </div>
                            {this.state.login === true ?
                                (<Logout />) : ( <Login />)
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
                </div>
            );
        }

    }
}

export default UrlMainContainer;