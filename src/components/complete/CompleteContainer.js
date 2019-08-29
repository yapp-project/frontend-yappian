import React, { Component } from 'react';
import './CompleteContainer.css';
import axios from 'axios'


import completeIcon from '../../img/completeImg.png'

class CompleteContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            projectIdx: this.props.projectIdx,
            projectObject: {},
            pdfUrl : '',
            releaseCheck : ''
        }
    }

    componentDidMount() {
        this.onGetCompleteProject(this.props.projectIdx)
        this.setState({
            projectIdx: this.props.projectIdx
        })

    }

    componentWillReceiveProps(nextProps){
        this.onGetCompleteProject(nextProps.projectIdx)
        this.setState({
            projectIdx: nextProps.projectIdx
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    onGetCompleteProject  = (projectIdx) => {
        const apiUrl = `http://localhost:8085/api/project/`+ projectIdx + `/finish`

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
                this.props.handleError()
            })
    }

    render(){
        const { projectObject, releaseCheck } = this.state;
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
                            releaseCheck === 'Y' ?
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
                        releaseCheck === 'Y' ?
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