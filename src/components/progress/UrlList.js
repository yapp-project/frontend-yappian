import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './UrlList.css';
import './UsedProgram.css'
import InsertProgramForm from "./UsedProgram";
import InsertUrlForm from './InsertUrlForm';
import shareIcon from '../../img/goUrl.png';
import deleteIcon from '../../img/closeIcon.png';
import axios from 'axios';

class UrlList extends Component{
    constructor(props){
        super(props);

        this.state = {
            urlList : [],
            projectIdx : this.props.projectIdx,
            noMoveUrl : false,
            login : this.props.login,
            finalCheck : this.props.finalCheck
        }
    }

    componentDidMount() {
        this.handleGetUrl()
    }

    componentDidUpdate() {
        this.handleGetUrl()
    }


    handleGetUrl = () => {
        const { projectIdx } = this.state;
        const apiUrl = `http://15.164.13.58:8085/api/project/` + projectIdx + `/url/list`;

        axios.get(apiUrl)
            .then(res => {
                this.setState ({
                    urlList  : res.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDeleteUrl = (data) => {
        this.setState({
            noMoveUrl : true
        })

        const { projectIdx } = this.state;

            const apiUrl = `http://15.164.13.58:8085/api/project/` + projectIdx + `/url/`+data;

            axios.delete(apiUrl)
                .then(res => {
                        this.handleGetUrl();
                    this.setState({
                        noMoveUrl : false
                    })
                    }
                )
                .catch(error => {console.log(error)});

    }


    handleUrlClick = (data) => {
        if(this.state.noMoveUrl === false){
            window.open("http://www.naver.com")
        }
    }

    render(){
        const { urlList, projectIdx } = this.state;

        return(
            <div className="urlListMainWrapper">
                <div className="urlListWrapper">
                    {this.state.login === true && this.state.finalCheck === 'N'? (
                        <div className="flexboxInUrlList">
                            <div className="urlListTitle">산출물 업로드</div>
                            <div className="ContentWrapper">
                                <InsertUrlForm projectIdx={projectIdx}/>
                            </div>
                        </div>
                    ) : ''}


                </div>
                <div className="urlList">
                    <div className="urlListObject border-side">
                        <div className="urlListObjectTitleFont">
                            1차 DEV CAMP
                        </div>


                        {
                                    urlList.filter(url => (url.type === 'FIRST')).map((url, index) => (
                                            <div className="urlObjectWrapper" key={index} onClick={() => {console.log("url")}}>
                                                <div className="insideUrlObject LeftInUrlObject">
                                                    <img src={shareIcon} className="shareIconStyled" />
                                                </div>
                                                <div className="insideUrlObject CenterInUrlObject">
                                                    {url.title}
                                                </div>
                                                {this.state.login === true && this.state.finalCheck === 'N'?
                                                    (
                                                        <div className="insideUrlObject RightInUrlObject" onClick={() => {console.log("delete")}}>
                                                            <img src={deleteIcon} className="deleteIconStyled" />
                                                        </div>
                                                    ) : (<div className="insideUrlObject"></div>)}

                                            </div>
                                    ))
                        }



                    </div>
                    <div className="urlListObject border-side padding-left">
                        <div className="urlListObjectTitleFont">
                            2차 DEV CAMP
                        </div>

                        {
                                    urlList.filter(url => (url.type === 'SECOND')).map((url, index) => (
                                        <div className="urlObjectWrapper" key={"second"+index}>
                                            <div className="insideUrlObject LeftInUrlObject">
                                                <img src={shareIcon} className="shareIconStyled" />
                                            </div>
                                            <div className="insideUrlObject CenterInUrlObject">
                                                {url.title}
                                            </div>
                                            {this.state.login === true && this.state.finalCheck === 'N'? (
                                                <div className="insideUrlObject RightInUrlObject" onClick={() => this.handleDeleteUrl(url.idx)}>
                                                    <img src={deleteIcon} className="deleteIconStyled" />
                                                </div>
                                            ) : (<div className="insideUrlObject"></div>)}

                                        </div>
                                    ))
                        }

                    </div>
                    <div className="urlListObject padding-left">
                        <div className="urlListObjectTitleFont">
                            HOME - COMINGDAY
                        </div>

                        {
                                    urlList.filter(url => (url.type === 'HOME')).map((url, index) => (
                                        <div className="urlObjectWrapper" key={"home"+index}>
                                            <div className="insideUrlObject LeftInUrlObject">
                                                <img src={shareIcon} className="shareIconStyled" />
                                            </div>
                                            <div className="insideUrlObject CenterInUrlObject">
                                                {url.title}
                                            </div>
                                            {this.state.login === true && this.state.finalCheck === 'N' ? (
                                                <div className="insideUrlObject RightInUrlObject" onClick={() => this.handleDeleteUrl(url.idx)}>
                                                    <img src={deleteIcon} className="deleteIconStyled" />
                                                </div>
                                            ) : (<div className="insideUrlObject"></div>)}
                                        </div>
                                    ))
                        }

                    </div>
                </div>
            </div>

        );
    }
}

export default UrlList;