import React, {Component} from 'react'
import Navbar from '../components/navbar/firstMain/Navbar'
import './MainContainer.css'

class MainContainer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="main">
                <Navbar />
            </div>
        );
    }
}

export default MainContainer;