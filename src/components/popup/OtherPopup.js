import React, { Component } from 'react'
import './OtherPopup.css'
import moveIcon from '../../img/stroke-1@3x.png'
import Modal from "react-modal";
import CompletePopup from "./CompletePopup";
import JoinProjectPopup from "./JoinProjectPopup";


const otherPopupBackground = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'none'
    }
}

class OtherPopup extends Component {
    constructor(props){
        super(props)

        this.state = {
            completePopup : this.props.completePopup,
            redirect : this.props.redirect,
            projectIdx : this.props.projectIdx,
            joinMember : this.props.joinMember,
            showInviteCode : false,
            inviteWord : '(다른 멤버들을 초대할 수 있는 코드입니다.)'
        }
    }


    componentDidMount() {
        this.setState({
            completePopup : this.props.completePopup,
            joinMember : this.props.joinMember,
            redirect : this.props.redirect,
            projectIdx : this.props.projectIdx
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            completePopup : nextProps.completePopup,
            joinMember : nextProps.joinMember,
            redirect : nextProps.redirect,
            projectIdx : nextProps.projectIdx
        })
        //
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    openOtherPopup = () => {
        this.props.openOtherPopup();
    }

    closeOtherPopup = () => {
        this.props.closeOtherPopup();
    }

    openCompletePopup = () => {
        this.props.openCompletePopup()
    }

    closeCompletePopup = () => {
        this.props.closeCompletePopup()
    }

    openJoinPopup = () => {
        this.setState({
            joinPopup : true
        })
    }

    closeJoinPopup = () => {
        this.setState({
            joinPopup : false
        })
    }

    redirectToUrl = (idx) => {
        this.props.redirectToUrl(idx)
    }

    joinCodeHover = () => {
        this.setState({
            showInviteCode : true
        })
    }

    render(){
        return (
            <Modal
                isOpen={this.props.otherPopup}
                onRequestClose={this.closeOtherPopup}
                className="otherWrapper" style={otherPopupBackground}>
                <div className="otherTitle">프로젝트 관리</div>



                    {
                        this.state.joinMember === true ?
                            (
                                <div className="otherContentList">
                                    <div className="openCompleteProject" onClick={this.openCompletePopup}>
                                        프로젝트 완료하기
                                        <img src={moveIcon} className="moveIcon"/>
                                    </div>
                                    {/*<div onMouseOver={this.joinCodeHover}>*/}
                                        {/*<div className="pwdWrapper">*/}
                                            {/*프로젝트 조인 코드 보기*/}
                                        {/*</div>*/}
                                        {/*<div className="pwdWrapperInfo">*/}
                                            {/*{*/}
                                                {/*this.state.showInviteCode === true ?*/}
                                                    {/*(123)*/}
                                                    {/*:*/}
                                                    {/*'(다른 멤버들을 초대할 수 있는 코드입니다.)'*/}
                                            {/*}*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    <CompletePopup
                                        openCompletePopup={this.openCompletePopup}
                                        closeCompletePopup={this.closeCompletePopup}
                                        completePopup={this.state.completePopup}
                                        projectIdx={this.props.projectIdx}
                                        redirectToUrl={this.redirectToUrl}
                                        redirect={this.state.redirect}
                                    />
                                </div>
                            )
                            :
                            (
                                <div className="otherContentList">
                                    <div className="openJoinProject" onClick={this.openJoinPopup}>
                                        프로젝트 참여하기
                                        <img src={moveIcon} className="moveIcon"/>
                                    </div>
                                    <JoinProjectPopup
                                        closeJoinPopup={this.closeJoinPopup}
                                        joinPopup={this.state.joinPopup}
                                        projectIdx={this.state.projectIdx}
                                    />
                                </div>
                            )
                    }

            </Modal>
        );
    }
}

export default OtherPopup;