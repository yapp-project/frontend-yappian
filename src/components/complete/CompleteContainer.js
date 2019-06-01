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
            numPages: null,
            pageNumber: 1
        }
    }

    componentDidMount() {
        this.onGetCompleteProject()
    }

    componentWillMount() {
        this.onGetCompleteProject()
    }

    onGetCompleteProject  = () => {
        const { projectIdx } = this.state
        const apiUrl = `http://localhost:8085/api/project/`+ projectIdx + `/finish`

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    projectObject : res.data,
                    pdfUrl : res.data.fileList[1].fileUrl
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render(){
        const { projectObject } = this.state;
        const pdfUrl = this.state.pdfUrl;
        const { pageNumber } = this.state;

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
                        <div className="rightInTeamInfoComplete">
                            <img src={completeIcon} className="completeIcon"/>
                        </div>

                    </div>
                    <div className="projectIntroInComplete">
                        {projectObject.projectDescription}
                    </div>
                    <div className="projectAddress">
                        {projectObject.productURL}
                    </div>
                </div>
                <div className="rightInComplete">
                    <iframe src={pdfUrl} className="pdfView"/>
                </div>
            </div>
        );
    }
}

export default CompleteContainer;