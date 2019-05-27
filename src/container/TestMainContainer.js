import React, { Component } from 'react';
import {CompleteContainer, ProgressContainer} from "../components";

export default class TestMainContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            viewState : 'progress'
        }
    }

    handleChangeView = (data) => {
        console.log(data)
        this.setState({
            viewState : data
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleChangeView("progress")}>progress</button>
                <button onClick={() => this.handleChangeView("complete")}>complete</button>
                {this.state.viewState === 'progress' ? ( <ProgressContainer /> ) : (<CompleteContainer />)}
                <ProgressContainer />
            </div>
        );
    }
}