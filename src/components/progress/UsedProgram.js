import React, { Component } from 'react';
import './UsedProgram.css'
import InsertProgramForm from "./InsertProgramForm";
import ProgramItem from "./ProgramItem";
import axios from "axios";

class UsedProgram extends Component {
    constructor(props){
        super(props);

        this.state = {
            toolList : []
        }
    }

    componentDidMount() {
        this.handleGetUrl()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleGetUrl()
    }

    handleGetUrl = () => {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url/list';

        axios.get(apiUrl)
            .then(res => {
                this.setState ({
                    toolList  : res.data.data.filter(tool => (tool.type === 'TOOL'))
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDeleteUrl = (data) => {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url/'+data;

        axios.delete(apiUrl)
            .then(res => {
                    this.handleGetUrl();
                }
            )
            .catch(error => {console.log(error)});
    }

    render(){
        return (
            <div className="usedProgramWrapper">
                <div className="flexboxInUsedProgram">
                    <div className="usedProgramTitle">사용한 협업 프로그램 등록</div>
                    <div className="thisContentWrapper">
                        <InsertProgramForm />
                        <div className="programItemAlign">
                            <ProgramItem toolList={this.state.toolList} />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default UsedProgram;