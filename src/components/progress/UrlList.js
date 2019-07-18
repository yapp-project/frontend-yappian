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
            login : this.props.login,
            finalCheck : this.props.finalCheck,
            joinMember : this.props.joinMember
        }


    }

    componentDidMount() {
        this.handleGetUrl(this.props.projectIdx)
        this.setState({
            login : this.props.login,
            finalCheck : this.props.finalCheck,
            joinMember : this.props.joinMember,
            projectIdx : this.props.projectIdx
        })
    }


    componentWillReceiveProps(nextProps){
        this.handleGetUrl(nextProps.projectIdx)
        this.setState({
            joinMember : nextProps.joinMember,
            login : nextProps.login,
            finalCheck : nextProps.finalCheck,
            projectIdx : nextProps.projectIdx
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }



    handleGetUrl = (projectIdx) => {
        const apiUrl = `https://yappian.com/api/project/` + projectIdx + `/url/list`;

        axios.get(apiUrl)
            .then(res => {
                this.setState ({
                    urlList  : res.data.filter(list => list.type !=='TOOL')
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDeleteUrl = (data) => {
        const { projectIdx } = this.state;
            const apiUrl = `https://yappian.com/api/project/` + projectIdx + `/url/`+data;

            axios.delete(apiUrl)
                .then(res => {
                        this.handleGetUrl(projectIdx);
                    }
                )
                .catch(error => {console.log(error)});

    }

    onSuccessInsert = (type, ArrayData) => {
        this.setState({
            urlList : ArrayData
        })
    }

    handleToolUrlClick = (data) => {
        window.location = data
    }


    render(){
        const { urlList, projectIdx } = this.state;

        return(
            <div className="urlListMainWrapper">
                <div className="urlListWrapper">
                    {this.state.login === true && this.state.finalCheck === 'N' && this.state.joinMember === true ? (
                        <div className="flexboxInUrlList">
                            <div className="urlListTitle">산출물 업로드</div>
                            <div className="ContentWrapper">
                                <InsertUrlForm projectIdx={projectIdx} onSuccessInsert={this.onSuccessInsert}/>
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
                                            <div className="urlObjectWrapper" key={index}>
                                                <div className="insideUrlObject LeftInUrlObject">
                                                    <img src={shareIcon} className="shareIconStyled" />
                                                </div>
                                                <div className="centerUrlObject CenterInUrlObject" onClick={() => {this.handleToolUrlClick(url.contents)}}>
                                                    {url.title}
                                                </div>
                                                {this.state.login === true && this.state.finalCheck === 'N'?
                                                    (
                                                        <div className="insideUrlObject RightInUrlObject" onClick={() => {this.handleDeleteUrl(url.idx)}}>
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
                                            <div className="centerUrlObject CenterInUrlObject" onClick={() => {this.handleToolUrlClick(url.contents)}}>
                                                {url.title}
                                            </div>
                                            {this.state.login === true && this.state.finalCheck === 'N'? (
                                                <div className="insideUrlObject RightInUrlObject" onClick={() => {this.handleDeleteUrl(url.idx)}}>
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
                                            <div className="centerUrlObject CenterInUrlObject" onClick={() => {this.handleToolUrlClick(url.contents)}}>
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