import React, { Component } from 'react';
import {Redirect} from "react-router-dom";


class TestMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : false
        }
    }

    componentDidMount() {
        this.setState({
            redirect : this.state.redirect
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    ChangeRedirect = () => {
        this.setState({
            redirect : !this.state.redirect
        })
    }


    render(){
        // if(this.state.redirect){
        //     return(
        //         <Redirect to="test"></Redirect>
        //     );
        //
        // }

        return (
            <div>
                <div>{JSON.stringify(this.state.redirect)}</div>
                <button onClick={this.ChangeRedirect}>123</button>
            </div>

        );
    }
}

export default TestMainContainer;