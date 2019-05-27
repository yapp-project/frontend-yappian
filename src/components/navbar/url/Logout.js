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
            otherInUrl : false,
            memberInUrl : false
        }
    }

    showOtherInUrl = () => {
        if(!this.state.otherInUrl){
            document.addEventListener('click', this.handleOtherInUrl, false)
        }else {
            document.removeEventListener('click', this.handleOtherInUrl, false)
        }

        this.setState({
            otherInUrl : !this.state.otherInUrl
        })
    }

    handleOtherInUrl = (e) => {
        if(this.otherInUrl.contains(e.target)){
            return;
        }

        this.showOtherInUrl()
    }

    showMemberInUrl = () => {
        if(!this.state.memberInUrl){
            document.addEventListener('click', this.handleMemberInUrl, false)
        }else {
            document.removeEventListener('click', this.handleMemberInUrl, false)
        }

        this.setState({
            memberInUrl : !this.state.memberInUrl
        })
    }

    handleMemberInUrl = (e) => {
        if(this.memberInUrl.contains(e.target)){
            return;
        }

        this.showMemberInUrl()
    }


    render(){
        return(
            <div className="right">
                <img src={otherIcon} className="otherIcon" onClick={this.showOtherInUrl} ref={node => this.otherInUrl = node}/>
                {
                    this.state.otherInUrl === true ?
                        <OtherPopup />
                        : null
                }
                <img src={user} className="userIcon" onClick={this.showMemberInUrl} ref={node => this.memberInUrl = node}/>
                {
                    this.state.memberInUrl === true ?
                        <MemberInfo />
                        : null
                }
            </div>
        );
    }
}

export default Logout;