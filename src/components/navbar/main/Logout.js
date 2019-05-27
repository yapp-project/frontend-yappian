import React , {Component} from 'react'
import './Navbar.css'

import userIcon from '../../../img/userIcon.png';
import CreateProjectPopup from "../../popup/CreateProjectPopup";
import MemberInfo from "../../popup/MemberInfo";


class Logout extends Component {
    constructor(props){
        super(props);

        this.state = {
            showCreatePopup : false,
            showMemberInfoPopup : false
        }
    }

    showCreatePopup = () => {
        // if(!this.state.showCreatePopup){
        //     document.addEventListener('click', this.handleCreatePopup,false);
        // }else {
        //     document.removeEventListener('click', this.handleCreatePopup,false);
        // }

        this.setState({
            showCreatePopup : !this.state.showCreatePopup
        })
    }

    // handleCreatePopup = (e) => {
    //     if(this.create.contains(e.target)){
    //         return;
    //     }
    //
    //     this.showCreatePopup()
    // }

    showMemberInfoPopup = () => {
        if (!this.state.showMemberInfoPopup) {
            //
            document.addEventListener('click', this.handleMemberPopup, false);
        } else {
            document.removeEventListener('click', this.handleMemberPopup, false);
        }

        this.setState({
            showMemberInfoPopup : !this.state.showMemberInfoPopup
        })
    }

    g

    handleMemberPopup = (e) => {
        if (this.member.contains(e.target)) {
            return;
        }

        this.showMemberInfoPopup()
    }



    render(){

        return (
            <div className="leftFlow">
                <div className="CreateNewProject" onClick={this.showCreatePopup}>새 프로젝트 만들기</div>
                {
                    this.state.showCreatePopup === true ?
                        <CreateProjectPopup showCreatePopup={this.showCreatePopup} />
                        :
                        null
                }
                <img src={userIcon} className="userIcon" onClick={this.showMemberInfoPopup} ref={node => { this.member = node; }}/>
                {
                    this.state.showMemberInfoPopup === true ?
                        <MemberInfo showMemberInfoPopup={this.showMemberInfoPopup} login={this.props.login} />
                        :
                        null
                }
            </div>
        );
    }
}

export default Logout;