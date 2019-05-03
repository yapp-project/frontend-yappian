import React, { Component } from 'react';

import './UrlList.css';
import './UsedProgram.css'
import InsertProgramForm from "./UsedProgram";
import InsertUrlForm from './InsertUrlForm';

import shareIcon from '../../img/group@3x.png';
import deleteIcon from '../../img/closeIcon.png';
import axios from 'axios';

class UrlList extends Component{
    constructor(props){
        super(props);

        this.state = {
            urlList : []
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
                    urlList  : res.data.data
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
        const { urlList } = this.state;

        return(
            <div className="urlListMainWrapper">
                <div className="urlListWrapper">
                    <div className="flexboxInUrlList">
                        <div className="urlListTitle">산출물 업로드</div>
                        <div className="ContentWrapper">

                                <InsertUrlForm/>

                        </div>
                    </div>
                </div>
                <div className="urlList">
                    <div className="urlListObject border-side">
                        <div className="urlListObjectTitleFont">
                            1차 DEV CAMP
                        </div>


                        {
                            urlList.filter(url => (url.type === 'FIRST')).map((url, index) => (
                                <div className="urlObjectWrapper" key={"first"+index}>
                                    <div className="insideUrlObject LeftInUrlObject">
                                        <img src={shareIcon} className="shareIconStyled" />
                                    </div>
                                    <div className="insideUrlObject CenterInUrlObject">
                                        {url.title}
                                    </div>
                                    <div className="insideUrlObject RightInUrlObject" onClick={() => this.handleDeleteUrl(url.idx)}>
                                        <img src={deleteIcon} className="deleteIconStyled" />
                                    </div>
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
                                    <div className="insideUrlObject RightInUrlObject" onClick={() => this.handleDeleteUrl(url.idx)}>
                                        <img src={deleteIcon} className="deleteIconStyled" />
                                    </div>
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
                                    <div className="insideUrlObject RightInUrlObject" onClick={() => this.handleDeleteUrl(url.idx)}>
                                        <img src={deleteIcon} className="deleteIconStyled" />
                                    </div>
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