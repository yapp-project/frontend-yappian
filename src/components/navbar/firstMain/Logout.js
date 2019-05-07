import React , {Component} from 'react'
import './Navbar.css'

import userIcon from '../../../img/userIcon.png';
import CreateProjectPopup from "../../popup/CreateProjectPopup";

class Logout extends Component {
    constructor(props){
        super(props);

        this.state = {
            showCreatePopup : false
        }
    }

    showCreatePopup = () => {
        this.setState({
            showCreatePopup : !this.state.showCreatePopup
        })
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
                <img src={userIcon} className="userIcon"/>
            </div>
        );
    }
}

export default Logout;