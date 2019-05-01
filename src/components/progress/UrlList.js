import React, { Component } from 'react';

import './UrlList.css';
import './UsedProgram.css'
import InsertProgramForm from "./UsedProgram";
import InsertUrlForm from './InsertUrlForm';

import shareIcon from '../../img/group@3x.png';
import deleteIcon from '../../img/closeIcon.png';

class UrlList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="urlListMainWrapper">
                <div className="urlListWrapper">
                    <div className="flexboxInUrlList">
                        <div className="urlListTitle">산출물 업로드</div>
                        <div className="ContentWrapper">
                            <InsertUrlForm />
                        </div>
                    </div>
                </div>
                <div className="urlList">
                    <div className="urlListObject border-side">
                        <div className="urlListObjectTitleFont">
                            1차 DEV CAMP
                        </div>

                        <div className="urlObjectWrapper">

                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                        <div className="urlObjectWrapper">

                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                        <div className="urlObjectWrapper">

                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                        <div className="urlObjectWrapper">

                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                        <div className="urlObjectWrapper">
                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                        <div className="urlObjectWrapper">
                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                    </div>
                    <div className="urlListObject border-side padding-left">
                        <div className="urlListObjectTitleFont">
                            2차 DEV CAMP
                        </div>

                        <div className="urlObjectWrapper">
                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                    </div>
                    <div className="urlListObject padding-left">
                        <div className="urlListObjectTitleFont">
                            HOME - COMINGDAY
                        </div>

                        <div className="urlObjectWrapper">
                            <div className="insideUrlObject LeftInUrlObject">
                                <img src={shareIcon} className="shareIconStyled" />
                            </div>
                            <div className="insideUrlObject CenterInUrlObject">
                                발표 PPT
                            </div>
                            <div className="insideUrlObject RightInUrlObject">
                                <img src={deleteIcon} className="deleteIconStyled" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default UrlList;