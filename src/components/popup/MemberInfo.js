import React, {Component} from 'react';
import './MemberInfo.css';
import logoutIcon from '../../img/logoutIcon.png'
import moveBtn from '../../img/stroke-1@3x.png'
import { Link } from 'react-router-dom'


class MemberInfo extends Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        this.handleGetJoinProject()
    }

    handleGetJoinProject = () => {

    }

    showMemberInfoPopup = () => {
        this.props.showMemberInfoPopup()
    }

    render(){
        return (
            <div className="backgroundMemberInfoWrapper">

                <div className="memberInfoWrapper">
                    <div className="memberInfoWrapperTitle">참여한 프로젝트</div>
                    <div className="joinList">




                        <div className="joinObjectWrapper">
                            <span className="joinObject mr-3">13기</span>
                            <span className="joinObject mr-3">|</span>
                            <span className="joinObject mr-3">yappian</span>
                            <span className="joinObject mr-3">|</span>
                            <span className="joinObject mr-3">WEB</span>
                            <img src={moveBtn} className="moveBtnStyled" />
                        </div>





                    </div>

                    <div className="logoutWrapper">
                        <img src={logoutIcon} className="logoutButton" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberInfo;