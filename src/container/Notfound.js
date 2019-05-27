import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import './Notfound.css'

import logo from '../img/yappian-copy@3x.png'

class Notfound extends Component {

    render(){
        return (
            <div>
                <div className="notFoundTopLine"></div>
                <div className="notFoundWrapper">
                    <div className="errorBox">
                        SORRY :(
                    </div>
                    <h1>YAPPIAN 에러페이지입니다.</h1>
                    <Link to="/">
                        <div className="moveMainStyled">
                            메인으로 이동하기
                        </div>
                    </Link>
                </div>
            </div>

        );
    }
}

export default Notfound;