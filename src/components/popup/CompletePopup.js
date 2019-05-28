import React, {Component} from 'react';
import './CompletePopup.css';

import completeInputNo from '../../img/complete-input-.png'
import completeInputYes from '../../img/completeinputurlpupple.png'


class CompletePopup extends Component {
    constructor(props){
        super(props);

        this.state = {
            urlInputCaution : true
        }

    }

    render(){
        return (
            <div className="completeWrapper">
                <div className="topStyled"></div>
                <div className="completeFrame">
                    <div className="completePopupTitle">프로젝트 완료하기</div>
                    <div className="completePopupInfo">YAPPIAN 여러분! 프로젝트 완료를 축하합니다.</div>
                    <div className="completePopupInputUrlBox">
                        <div className="emptySpace"></div>
                        <input type="text" className="inputStyled" placeholder="프로젝트 URL"/>
                        <div className="emptySpace">
                            {this.state.urlInputCaution === true ?
                                <img src={completeInputNo} className="inputUrlImg"/>
                                :
                                <img src={completeInputYes} className="inputUrlImg"/>
                            }

                        </div>
                    </div>
                    <div className="intro-img-wrapper">
                        <div className="intro-wrapper">
                            <div>프로젝트 소개</div>
                        </div>
                        <div className="img-wrapper">
                            <div>커버 이미지</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompletePopup;