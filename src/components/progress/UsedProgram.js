import React, { Component } from 'react';
import './UsedProgram.css'
import InsertProgramForm from "./InsertProgramForm";
import ProgramItem from "./ProgramItem";

class UsedProgram extends Component {
    render(){
        return (
            <div className="usedProgramWrapper">
                <div className="flexboxInUsedProgram">
                    <div className="usedProgramTitle">사용한 협업 프로그램 등록</div>
                    <div className="thisContentWrapper">
                        <InsertProgramForm />
                        <div className="programItemAlign">
                            <ProgramItem />
                            <ProgramItem/>
                            <ProgramItem/>
                            <ProgramItem/>
                            <ProgramItem/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default UsedProgram;