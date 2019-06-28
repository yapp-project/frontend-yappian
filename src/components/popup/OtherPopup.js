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
            completePopup : false,
            redirect : this.props.redirect,
            projectIdx : this.props.projectIdx,
            joinMember : this.props.joinMember
        }
    }


    componentDidMount() {
        this.setState({
            joinMember : this.props.joinMember,
            redirect : this.props.redirect,
            projectIdx : this.props.projectIdx
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
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
        this.setState({
            completePopup : true
        })
    }

    closeCompletePopup = () => {
        this.setState({
            completePopup : false
        })
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

    redirectToUrl = () => {
        this.props.redirectToUrl()
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
                                    <CompletePopup
                                        openCompletePopup={this.openCompletePopup}
                                        closeCompletePopup={this.closeCompletePopup}
                                        completePopup={this.state.completePopup}
                                        projectIdx={this.props.projectIdx}
                                        redirectToUrl={this.redirectToUrl}
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