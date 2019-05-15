import React, { Component } from 'react';
import './CompleteContainer.css';
import axios from 'axios'


import completeIcon from '../../img/completeImg.png'
import pdfViewer from '../../img/1팀 yapppian dc1 발표자료.pdf'

class CompleteContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            projectIdx: this.props.projectIdx,
            projectObject: {}
        }
    }

    componentDidMount() {
        this.onGetCompleteProject()
    }

    onGetCompleteProject  = () => {
        const { projectIdx } = this.state
        const apiUrl = `http://15.164.13.58:8085/v1/api/project/`+ projectIdx + `/finish`

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    projectObject : res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const { projectObject } = this.state;

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
                    <iframe type="file" src="https://s3.ap-northeast-2.amazonaws.com/yappian/Files/2019/05/f33ddd76-6bfc-463b-8b17-31b650345c8c_yappian 2차 뎁캠 발표자료22.pdf" className="pdfView"/>
                </div>
            </div>
        );
    }
}

export default CompleteContainer;