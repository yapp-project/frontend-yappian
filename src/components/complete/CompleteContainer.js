import React, { Component } from 'react';
import './CompleteContainer.css';

import completeIcon from '../../img/completeImg.png'
import pdfViewer from '../../img/1팀 yapppian dc1 발표자료.pdf'

class CompleteContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="completeWrapper1">
                <div className="leftInComplete">
                    <div className="teamInfoInComplete">
                        <div className="leftInTeamInfoComplete">
                            <div className="teamName">DITO</div>
                            <div className="teamOthersInfo">13기 ㅣ Android</div>
                        </div>
                        <div className="rightInTeamInfoComplete">
                            <img src={completeIcon} className="completeIcon"/>
                        </div>

                    </div>
                    <div className="projectIntroInComplete">
                        무임승차는 조별과제에 참여하는 수많은 대학생들에게 가장 큰 스트레스입니다.
                        하지만, 태생부터 프리라이더는 없다고 생각합니다. 적절한 시스템의 부재가 무임승차자를 낳을 뿐입니다. 가시적인 역할분담과 ‘시간’이라는 객관적인 평가척도를 통해 무임승차를 사전에 방지하고, 서로 눈치만 보던 팀플에서 각자가 책임감 있는 팀플로 변할 수 있습니다.
                    </div>
                    <div className="projectAddress">
                        https://play.google.com/store/apps/detailsid=roommate.yapp.com.yapp13th_roommate
                    </div>
                </div>
                <div className="rightInComplete">
                    <iframe type="file" src={pdfViewer} className="pdfView"/>
                </div>
            </div>
        );
    }
}

export default CompleteContainer;