import React, { Component } from 'react';
import './CompleteContainer.css';
import axios from 'axios'
import GoogleDocsViewer from 'react-google-docs-viewer'
import { Document, Page } from 'react-pdf';

import pdf from '../../img/sample-file.pdf'


import completeIcon from '../../img/completeImg.png'

class CompleteContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            projectIdx: this.props.projectIdx,
            projectObject: [],
            pdfUrl : '',
            releaseCheck : ''
        }
    }

    componentDidMount() {
        this.setState({
            projectIdx: this.props.projectIdx
        })
        this.onGetCompleteProject()
    }

    componentWillReceiveProps(nextProps){
        //console.log(JSON.stringify(nextProps.defaultGisu))
        this.setState({
            projectIdx: this.props.projectIdx
        })
    }
    // //
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillMount() {
        this.onGetCompleteProject()
    }

    onGetCompleteProject  = () => {
        const { projectIdx } = this.state
        const apiUrl = `https://yappian.com/api/project/`+ projectIdx + `/finish`

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    releaseCheck : res.data.releaseCheck
                })

                res.data.fileList.map((file, index) => {
                    if(file.type === 'PDF'){
                        this.setState({
                            projectObject : res.data,
                            pdfUrl : file.fileUrl
                        })
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { projectObject } = this.state;
        const pdfUrl = this.state.pdfUrl;

        return(
            <div className="completeWrapper1">
                <div className="leftInComplete">
                    <div className="teamInfoInComplete">
                        <div className="leftInTeamInfoComplete">
                            <div className="teamName">
                                {projectObject.projectName}
                            </div>
                            <div className="teamOthersInfo">
                                {projectObject.ordersNumber} 기 ㅣ {projectObject.projectType}
                            </div>
                        </div>
                        {
                            this.state.projectObject.releaseCheck === 'Y' ?
                                (
                                    <div className="rightInTeamInfoComplete">
                                        <img src={completeIcon} className="completeIcon"/>
                                    </div>
                                ) : ''

                        }


                    </div>
                    <div className="projectIntroInComplete">
                        {projectObject.projectDescription}
                    </div>

                    {
                        this.state.projectObject.releaseCheck === 'Y' ?
                            (
                                <div className="projectAddress">
                                    {projectObject.productURL}
                                </div>
                            ) : ''

                    }

                </div>
                <div className="rightInComplete">
                    <iframe src={pdfUrl} className="pdfView"/>
                </div>
            </div>
        );
    }
}

export default CompleteContainer;