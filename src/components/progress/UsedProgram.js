import React, { Component } from 'react';
import './UsedProgram.css'
import InsertProgramForm from "./InsertProgramForm";
import ProgramItem from "./ProgramItem";
import axios from "axios";

class UsedProgram extends Component {
    constructor(props){
        super(props);

        this.state = {
            toolList : [],
            projectIdx : this.props.projectIdx,
            login : this.props.login,
            finalCheck : this.props.finalCheck,
            TOOLData : [],
            URLData : []
        }
    }

    componentDidMount() {
        this.handleGetUrl()
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.handleGetUrl()
    // }

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




    render(){
        return (
            <div className="usedProgramWrapper">
                <div className="flexboxInUsedProgram">
                    <div className="usedProgramTitle">
                        사용한 협업 프로그램 {this.state.login === true? '등록' && this.state.finalCheck === 'N' : ''}
                    </div>
                    {this.state.login === true && this.state.finalCheck === 'N'?
                        (
                            <div className="thisContentWrapper">
                                <InsertProgramForm projectIdx={this.state.projectIdx} onSuccessInsert={this.onSuccessInsert}/>
                                <div className="programItemAlign">
                                    <ProgramItem login={this.state.login} toolList={this.state.toolList} finalCheck={this.state.finalCheck} projectIdx={this.state.projectIdx}/>
                                </div>
                            </div>
                        ): (
                            <div className="thisContentWrapper">
                                <div className="programItemAlign">
                                    <ProgramItem login={this.state.login} toolList={this.state.toolList} finalCheck={this.state.finalCheck}/>
                                </div>
                                {this.state.finalCheck ===  'Y' ?
                                    (
                                        <div className="non-member-notice">
                                            완료된 프로젝트는 조회만 가능합니다.
                                        </div>
                                    ) : (
                                        <div className="non-member-notice">
                                            협업 프로그램 등록과 산출물 업로드는 로그인 회원만 사용할 수 있습니다.
                                        </div>
                                    )}
                            </div>
                            )
                    }
                </div>

            </div>
        );
    }
}

export default UsedProgram;