import React, { Component } from 'react';
import './UsedProgram.css'
import InsertProgramForm from "./InsertProgramForm";
import ProgramItem from "./ProgramItem";
import axios from "axios";
import JoinProjectPopup from "../popup/JoinProjectPopup";

class UsedProgram extends Component {
    constructor(props){
        super(props);

        this.state = {
            toolList : [],
            projectIdx : this.props.projectIdx,
            login : this.props.login,
            finalCheck : this.props.finalCheck,
            TOOLData : [],
            URLData : [],
            joinMember : this.props.joinMember,
            joinPopup : false,
            joinOrLoginBtnHover : false
        }
    }

    componentDidMount() {
        this.handleGetUrl()
    }

    handleGetUrl = () => {
        const { projectIdx } = this.state;
        const apiUrl = `http://localhost:8085/api/project/`+ projectIdx + `/url/list`;

        axios.get(apiUrl)
            .then(res => {
                this.setState ({
                    toolList  : res.data.filter(tool => (tool.type === 'TOOL'))
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDeleteUrl = (data) => {
        const { projectIdx } = this.state;
        const apiUrl = `http://localhost:8085/api/project/`+ projectIdx + `/url/`+data;

        axios.delete(apiUrl)
            .then(res => {
                    this.handleGetUrl();
                }
            )
            .catch(error => {console.log(error)});
    }

    //insert 후 재로드를 위함
    onSuccessInsert = (type, ArrayData) => {
        this.setState({
            toolList : ArrayData
        })
    }

    goToJoinOrLogin = () => {
        if(this.state.login === false){
            window.location = 'http://localhost:8085/api/login'
        }else  {
            if(this.state.joinMember === false) {
                this.openJoinPopup()
            }
        }
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

    setJoinOrLoginBtnHover = () => {
        this.setState({
            joinOrLoginBtnHover : true
        })
    }

    noSetJoinOrLoginBtnHover = () => {
        this.setState({
            joinOrLoginBtnHover : false
        })
    }




    render(){
        return (
            <div className="usedProgramWrapper">
                <div className="flexboxInUsedProgram">
                    <div className="usedProgramTitle">
                        사용한 협업 프로그램 {this.state.login === true? '등록' && this.state.finalCheck === 'N' : ''}
                    </div>

                    {this.state.login === true ?
                        (
                        this.state.finalCheck === 'Y' ?(
                            <div className="thisContentWrapper">
                                <div className="programItemAlign">
                                    <ProgramItem login={this.state.login} toolList={this.state.toolList} finalCheck={this.state.finalCheck} projectIdx={this.state.projectIdx} handleGetUrl={this.handleGetUrl}/>
                                </div>
                                <div className="non-member-notice">
                                    완료된 프로젝트는 조회만 가능합니다.
                                </div>
                            </div>
                            )
                            : (
                                this.state.joinMember === true ? (
                                        <div className="thisContentWrapper">
                                            <InsertProgramForm projectIdx={this.state.projectIdx} onSuccessInsert={this.onSuccessInsert}/>
                                            <div className="programItemAlign">
                                                <ProgramItem login={this.state.login} toolList={this.state.toolList} finalCheck={this.state.finalCheck} projectIdx={this.state.projectIdx}  handleGetUrl={this.handleGetUrl}/>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <div className="thisContentWrapper">
                                            <div className={this.state.toolList.length <= 0 ? "non-member-notice" : "mtUsedProgram non-member-notice"}>

                                                    <div className="programItemAlign">
                                                        <ProgramItem login={this.state.login} toolList={this.state.toolList} finalCheck={this.state.finalCheck} projectIdx={this.state.projectIdx}  handleGetUrl={this.handleGetUrl}/>
                                                    </div>
                                                    <label className="thisColor">협업 프로그램 등록과 산출물 업로드는 로그인 회원 혹은 조인된 사용자만 가능합니다.</label>
                                                    <label className={this.state.joinOrLoginBtnHover === false ? "inGoToJoinOrLogin" : "outGoToJoinOrLogin"} onMouseEnter={this.setJoinOrLoginBtnHover} onMouseOut={this.noSetJoinOrLoginBtnHover} onClick={this.goToJoinOrLogin}>
                                                        프로젝트 참여하기
                                                    </label>
                                                    <JoinProjectPopup
                                                        closeJoinPopup={this.closeJoinPopup}
                                                        joinPopup={this.state.joinPopup}
                                                        projectIdx={this.state.projectIdx}
                                                    />




                                            </div>
                                        </div>
                                    )
                            )
                        )
                        :
                        (
                            <div className="thisContentWrapper">
                                <div className={this.state.toolList.length <= 0 ? "non-member-notice" : "mtUsedProgram non-member-notice"}>
                                    <div>
                                        <div className="programItemAlign">
                                            <ProgramItem login={this.state.login} toolList={this.state.toolList} finalCheck={this.state.finalCheck} projectIdx={this.state.projectIdx}  handleGetUrl={this.handleGetUrl}/>
                                        </div>
                                        <label className="thisColor">협업 프로그램 등록과 산출물 업로드는 로그인 회원 혹은 조인된 사용자만 가능합니다.</label>
                                        <label className={this.state.joinOrLoginBtnHover === false ? "inGoToJoinOrLogin" : "outGoToJoinOrLogin"} onMouseEnter={this.setJoinOrLoginBtnHover} onMouseOut={this.noSetJoinOrLoginBtnHover} onClick={this.goToJoinOrLogin}>
                                            프로젝트 참여하기
                                        </label>
                                        <JoinProjectPopup
                                            closeJoinPopup={this.closeJoinPopup}
                                            joinPopup={this.state.joinPopup}
                                            projectIdx={this.state.projectIdx}
                                        />
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
        );
    }
}

export default UsedProgram;