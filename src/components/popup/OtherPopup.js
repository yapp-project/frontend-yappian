import React, { Component } from 'react'
import './OtherPopup.css'
import moveIcon from '../../img/stroke-1@3x.png'

class OtherPopup extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div className="otherMainWrapper">
                <div className="otherWrapper">
                    <div className="otherTitle">프로젝트 관리</div>
                    <div className="otherContentList">
                        <div className="openCompleteProject">
                            프로젝트 완료하기
                            <img src={moveIcon} className="moveIcon"/>
                        </div>
                        <div className="openJoinProject">
                            프로젝트 참여하기
                            <img src={moveIcon} className="moveIcon"/>
                        </div>
                    </div>
                    <div className="otherBottom">
                        <span className="urlOfThisPage">[ no1webyappian.co.kr ]</span>
                        <span className="copyUrl">복사</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default OtherPopup;