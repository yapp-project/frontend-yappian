import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';

import './CreateProjectPopup.css';

import closeIcon from '../../img/noun-x-1890803@3x.png'
import submitButtonImg from '../../img/submit-button.png'
import {Dropdown} from "semantic-ui-react";
import axios from "axios";

const modalBackground = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    }
}

class CreateProjectPopup extends Component{
    constructor(props){
        super(props);

        this.state = {
            gisuList : [],
            ordersIdx: 0,
            password: "",
            projectName: "",
            projectType: "",
            code1 : '',
            code2 : '',
            code3 : '',
            code4 : '',
            codeCaution: false,
            redirect : false,
            projectIdx : 0
        }

    }

    componentDidMount() {
        this.getOrdersNumber();
    }

    getOrdersNumber = () => {
        const apiUrl = 'https://yappian.com/api/orders';

        axios.get(apiUrl)
            .then(res => {
                    res.data.map((list, index) =>
                        this.setState({
                            gisuList : this.state.gisuList.concat({
                                key : index, text : list.number+'기', value: parseInt(list.number)
                            })
                        })
                    )
                }
            )
            .catch(error => {
                console.log(error);
            });

    }

    //createModal method
    openCreateModal = () => {
        this.props.openCreateModal();
    }

    closeCreateModal = () => {
        this.setState({
            ordersIdx: 0,
            password: "",
            projectName: "",
            projectType: "",
            code1 : '',
            code2 : '',
            code3 : '',
            code4 : '',
            codeCaution: false
        })
        this.props.closeCreateModal();
    }

    insertOrders = (e, { value }) => {
        this.setState({
            ordersIdx : parseInt(value) - 9
        })
    }

    //프로젝트 이름
    handleProjectName = (e) => {
        this.setState({
            projectName : e.target.value
        })
    }

    //플랫폼타입
    handleProjectType = (e) => {
        this.setState({
            projectType : e.target.value
        })
    }


    //프로젝트 코드 입력



    handleCode = (e) => {
        const curValue = e.target.value
        const newValue = curValue.replace(/[^0-9]/g, '')

        if(newValue === '' || curValue === '') {
            this.setState({
                codeCaution : true
            })
        }else {
            this.setState({
                codeCaution : false,
                [e.target.name] : newValue
            })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const {ordersIdx, projectName, projectType, code1, code2, code3, code4, codeCaution } = this.state;


        const apiUrl = 'https://yappian.com/api/project';
        if(codeCaution === false){
            axios.post(apiUrl, {
                "ordersIdx": ordersIdx,
                "password": code1+code2+code3+code4,
                "projectName": projectName,
                "projectType": projectType
            })
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        projectIdx : res.data.projectIdx,
                        redirect : true
                    })

                })
                .catch(error => {
                    alert(error)
                });
        }else {
            alert("입력폼을 확인해주세요!")
        }

    }

    projectTypeCheck = (type) => {
        this.setState({
            projectType : type
        })
    }



    render(){
        const { projectIdx } = this.state;

        if(this.state.redirect === true){
            return(
                <Redirect to={"main/"+ projectIdx}/>
            );
        }

        const {gisuList, insert} = this.state;

        return(
                <Modal
                    isOpen={this.props.createModal}
                    onRequestClose={this.closeCreateModal}
                    className="createFrameBackground" style={modalBackground}
                >
                    <div className="header">
                        <img src={closeIcon} className="styledCloseIcon" onClick={this.closeCreateModal}/>
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
                                          onChange={this.insertOrders} options={gisuList}/>
                            </div>
                            <input name="projectName" className="inputProjectName" placeholder="프로젝트 이름"
                                   onChange={this.handleProjectName} maxLength="9" required/>
                            <div>

                            </div>
                            <div className="platformWrapper">
                                <div className={this.state.projectType === "IOS" ? 'selectedPlatformBtn m-rightInPlatform' : 'notSelectedPlatformBtn m-rightInPlatform'}
                                     onClick={() => this.projectTypeCheck("IOS")}>
                                    <input id="ios" onChange={this.handleProjectType} type="radio" value="IOS"
                                           checked={this.state.projectType === "IOS"} />
                                    <label htmlFor="ios">ios</label>
                                </div>
                                <div
                                    className={this.state.projectType === "ANDROID" ? 'selectedPlatformBtn m-rightInPlatform' : 'notSelectedPlatformBtn m-rightInPlatform'}
                                    onClick={() => this.projectTypeCheck("ANDROID")}>
                                    <input id="android" onChange={this.handleProjectType} type="radio"
                                           value="ANDROID" checked={this.state.projectType === "ANDROID"}/>
                                    <label htmlFor="android">android</label>
                                </div>
                                <div
                                    className={this.state.projectType === "WEB" ? 'selectedPlatformBtn' : 'notSelectedPlatformBtn'}
                                    onClick={() => this.projectTypeCheck("WEB")}>
                                    <input id="web" onChange={this.handleProjectType} type="radio" value="WEB"
                                           checked={this.state.projectType === "WEB"}/>
                                    <label htmlFor="web">web</label>
                                </div>
                            </div>
                            <div className="codeWrapper">
                                <div className="codeInfoTitle">초대 코드(네자리 숫자)를 생성해 주세요.</div>
                                <div className="insertCodeWrapper">
                                    <input name="code1" className="insertCodeObject m-rightInInsertCode"
                                           onChange={this.handleCode} maxLength="1" required/>
                                    <input name="code2" className="insertCodeObject m-rightInInsertCode"
                                           onChange={this.handleCode} maxLength="1" required/>
                                    <input name="code3" className="insertCodeObject m-rightInInsertCode"
                                           onChange={this.handleCode} maxLength="1" required/>
                                    <input name="code4" className="insertCodeObject" onChange={this.handleCode}
                                           maxLength="1" required/>
                                </div>

                                <div className="codCautionSpace">
                                    <div
                                        className={this.state.codeCaution === false ? 'visibilityCodeCaution' : 'insertCodeCaution'}>숫자만
                                        입력해 주세요.
                                    </div>
                                </div>
                            </div>

                            <button className="submitCreateProjectForm" type="submit">
                                <img src={submitButtonImg} className="submitButtonImg"/>
                            </button>
                        </div>
                    </form>
                </Modal>

        )
    }
}


export default CreateProjectPopup;