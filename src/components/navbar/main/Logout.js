import React , {Component} from 'react'
import './Navbar.css'

import userIcon from '../../../img/userIcon.png';
import CreateProjectPopup from "../../popup/CreateProjectPopup";
import MainMemberInfo from "../../popup/MainMemberInfo";


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

    redirectToUrlInMain = (projectIdx) => {
        this.props.redirectToUrlInMain(projectIdx)
    }



    render(){

        return (
            <div className="leftFlow">
                <div className="createNewProject" onClick={this.openCreateModal}>새 프로젝트 만들기</div>
                <CreateProjectPopup openCreateModal={this.openCreateModal} closeCreateModal={this.closeCreateModal} createModal={this.state.createModal} gisuList={this.state.gisuList}/>
                <img src={userIcon} className="userIcon" onClick={this.openMemberInfoPopup}/>
                <MainMemberInfo login={this.props.login}
                            openMemberInfoPopup={this.openMemberInfoPopup}
                            closeMemberInfoPopup={this.closeMemberInfoPopup}
                            memberInfoPopup={this.state.memberInfoPopup}
                            redirectToUrlInMain={this.redirectToUrlInMain}
                />
            </div>
        );
    }
}

export default Logout;