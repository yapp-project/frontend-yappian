import React, {Component} from 'react';

import './CreateProjectPopup.css';

class InviteCode extends Component {
    constructor(props){
        super(props);

        this.state = {
            code1 : '',
            code2 : '',
            code3 : '',
            code4 : '',
            plusCode : ''
        }
    }

    plusCode = () => {
        this.setState({
            plusCode : this.state.code1 + this.state.code2 + this.state.code3 + this.state.code4
        })
    }


    insertCode = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

        this.props.plusCode()

    }



    render(){
        return (
            <div className="codeWrapper">
                <div className="codeInfoTitle">초대 코드(네자리 숫자)를 생성해 주세요. </div>
                <div className="insertCodeWrapper">
                    <input name="code1" className="insertCodeObject m-rightInInsertCode" onChange={this.insertCode} value={this.state.code1}/>
                    <input name="code2" className="insertCodeObject m-rightInInsertCode" onChange={this.insertCode}  value={this.state.code2}/>
                    <input name="code3" className="insertCodeObject m-rightInInsertCode"  onChange={this.insertCode} value={this.state.code3}/>
                    <input name="code4" className="insertCodeObject" onChange={this.insertCode}  value={this.state.code4}/>
                </div>
                <div className="insertCodeCaution">숫자만 입력해 주세요. </div>
            </div>
        );
    }
}

export default InviteCode