import React , {Component} from 'react'
import './Navbar.css'

import userIcon from '../../../img/userIcon.png';
import CreateProjectPopup from "../../popup/CreateProjectPopup";
import MemberInfo from "../../popup/MemberInfo";
import Modal from "react-modal";
import TestCreateProjectModal from "../../../container/TestMainContainer";


class Logout extends Component {
    constructor(props){
        super(props);

        this.state = {
            createModal : false,
            memberInfoPopup : false,
            gisuList: this.props.gisuList
        }
    }

    openCreateModal = () => {
        this.setState({createModal: true});
    }


    closeCreateModal = () => {
        this.setState({createModal: false});
    }

    openMemberInfoPopup = () => {
        this.setState({
            memberInfoPopup : true
        })
    }

    closeMemberInfoPopup = () => {
        this.setState({
            memberInfoPopup : false
        })
    }



    render(){

        return (
            <div className="leftFlow">
                <div className="CreateNewProject" onClick={this.openCreateModal}>새 프로젝트 만들기</div>
                <CreateProjectPopup openCreateModal={this.openCreateModal} closeCreateModal={this.closeCreateModal} createModal={this.state.createModal} gisuList={this.state.gisuList}/>
                <img src={userIcon} className="userIcon" onClick={this.openMemberInfoPopup}/>
                <MemberInfo login={this.props.login}
                            openMemberInfoPopup={this.openMemberInfoPopup}
                            closeMemberInfoPopup={this.closeMemberInfoPopup}
                            memberInfoPopup={this.state.memberInfoPopup} />
            </div>
        );
    }
}

export default Logout;