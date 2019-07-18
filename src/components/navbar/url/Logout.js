import React, { Component } from 'react'

import './index.css'
import otherIcon from "../../../img/invalid-name@3x.png";
import user from "../../../img/user-icon-gray@3x.png";
import MemberInfo from "../../popup/MemberInfo";
import OtherPopup from "../../popup/OtherPopup"



class Logout extends Component {
    constructor(props){
        super(props)

        this.state = {
            memberInfoPopup : false,
            otherPopup : false,
            redirect : this.props.redirect,
            projectIdx : this.props.projectIdx,
            finalCheck : this.props.finalCheck,
            login: this.props.login,
            joinMember : this.props.joinMember,
            completePopup : this.props.completePopup
        }

    }

    componentDidMount() {
        this.setState({
            login: this.props.login,
            projectIdx : this.props.projectIdx,
            joinMember : this.props.joinMember,
            finalCheck : this.props.finalCheck,
            redirect : this.props.redirect,
            completePopup : this.props.completePopup
        })
    }

    componentWillReceiveProps(nextProps){
        //this.redirectToUrl(nextProps.projectIdx)
        this.setState({
            login : nextProps.login,
            projectIdx : nextProps.projectIdx,
            joinMember : nextProps.joinMember,
            finalCheck : nextProps.finalCheck,
            redirect : nextProps.redirect,
            completePopup : nextProps.completePopup
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }



    openMemberInfoPopup = () => {
        this.setState({
            memberInfoPopup : true
        })
    }

    closeMemberInfoPopup = () => {
        this.setState({
            memberInfoPopup : false
        })
    }

    openOtherPopup = () => {
        this.setState({
            otherPopup : true
        })
    }

    closeOtherPopup = () => {
        this.setState({
            otherPopup : false
        })
    }

    openCompletePopup = () => {
        this.props.openCompletePopup()
    }

    closeCompletePopup = () => {
        this.props.closeCompletePopup()
    }

    redirectToUrl = (idx) => {
        this.props.redirectToUrl(idx)
    }


    render(){

        return(

            <div className="right">

                {
                    this.state.finalCheck === 'N'? (
                        <div>
                            <img src={otherIcon} className="otherIcon" onClick={this.openOtherPopup}/>
                            <OtherPopup
                                openOtherPopup={this.openOtherPopup}
                                closeOtherPopup={this.closeOtherPopup}
                                otherPopup={this.state.otherPopup}
                                projectIdx={this.state.projectIdx}
                                redirectToUrl={this.redirectToUrl}
                                login={this.state.login}
                                joinMember={this.state.joinMember}
                                redirect={this.state.redirect}
                                completePopup={this.state.completePopup}
                                openCompletePopup={this.openCompletePopup}
                                closeCompletePopup={this.closeCompletePopup}
                            />
                        </div>

                    ) : ''
                }

                <div>
                    <img src={user} className="userIcon" onClick={this.openMemberInfoPopup}/>
                    <MemberInfo login={this.state.login}
                                openMemberInfoPopup={this.openMemberInfoPopup}
                                closeMemberInfoPopup={this.closeMemberInfoPopup}
                                memberInfoPopup={this.state.memberInfoPopup}
                                redirectToUrl={this.redirectToUrl}
                    />
                </div>

            </div>
        );
    }
}

export default Logout;