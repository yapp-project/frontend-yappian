import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../components/popup/CreateProjectPopup.css';
import closeIcon from "../img/noun-x-1890803@3x.png";
import {Dropdown} from "semantic-ui-react";
import submitButtonImg from "../img/submit-button.png";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '505px',
        height                : '538px',
    }
};




class TestCreateProjectModal extends Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        console.log(this.state.arr)
    }

    openModal = () => {
        this.props.openModal();
    }


    closeModal = () => {
        this.props.closeModal();
    }




    render(){
        return(
            <Modal
                isOpen={this.props.modalsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
            >
                <div className="header">
                    <img src={closeIcon} className="styledCloseIcon" onClick={this.showCreatePopup}/>
                </div>
                <div className="createProjectPopupInfo">
                    <div className="createProjectTitle">
                        새 프로젝트 만들기
                    </div>
                    <div className="underTitleAtCreate">
                        YAPP의 새로운 프로젝트를 만드세요!
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="styledCreateProjectForm">
                        <div className="selectGisu">
                            <Dropdown name="ordersIdx" placeholder='기수선택'
                                      onChange={this.insertOrders}/>
                        </div>
                        <input name="projectName" className="inputProjectName" placeholder="프로젝트 이름"
                               onChange={this.handleProjectName} maxLength="9"/>
                        <div>

                        </div>
                        <div className="platformWrapper">
                            <div
                                className={this.state.projectType === "IOS" ? 'selectedPlatformBtn m-rightInPlatform' : 'notSelectedPlatformBtn m-rightInPlatform'}>
                                <input id="ios" onChange={this.handleProjectType} type="radio" value="IOS"
                                       checked={this.state.projectType === "IOS"}/>
                                <label htmlFor="ios">ios</label>
                            </div>
                            <div
                                className={this.state.projectType === "ANDROID" ? 'selectedPlatformBtn m-rightInPlatform' : 'notSelectedPlatformBtn m-rightInPlatform'}>
                                <input id="android" onChange={this.handleProjectType} type="radio"
                                       value="ANDROID" checked={this.state.projectType === "ANDROID"}/>
                                <label htmlFor="android">android</label>
                            </div>
                            <div
                                className={this.state.projectType === "WEB" ? 'selectedPlatformBtn' : 'notSelectedPlatformBtn'}>
                                <input id="web" onChange={this.handleProjectType} type="radio" value="WEB"
                                       checked={this.state.projectType === "WEB"}/>
                                <label htmlFor="web">web</label>
                            </div>
                        </div>
                        <div className="codeWrapper">
                            <div className="codeInfoTitle">초대 코드(네자리 숫자)를 생성해 주세요.</div>
                            <div className="insertCodeWrapper">
                                <input name="code1" className="insertCodeObject m-rightInInsertCode"
                                       onChange={this.handleCode} maxLength="1" placeholder="*"/>
                                <input name="code2" className="insertCodeObject m-rightInInsertCode"
                                       onChange={this.handleCode} maxLength="1" placeholder="*"/>
                                <input name="code3" className="insertCodeObject m-rightInInsertCode"
                                       onChange={this.handleCode} maxLength="1" placeholder="*"/>
                                <input name="code4" className="insertCodeObject" onChange={this.handleCode}
                                       maxLength="1" placeholder="*"/>
                            </div>
                            <div
                                className={this.state.codeCaution === false ? 'visibilityCodeCaution' : 'insertCodeCaution'}>숫자만
                                입력해 주세요.
                            </div>
                        </div>

                        <button className="submitCreateProjectForm" type="submit">
                            <img src={submitButtonImg} className="submitButtonImg"/>
                        </button>
                    </div>
                </form>

            </Modal>
        );
    }

}

export default TestCreateProjectModal;