import React, { Component } from 'react';

import ProjectList from './ProjectList';
import {Dropdown} from "semantic-ui-react";
import axios from 'axios';
import './ProjectListWrapper.css';

import left from '../../img/projeclist-left.png';
import right from '../../img/projeclist-right.png'


class ProjectListWrapper extends Component {
    constructor(props){
        super(props);

        this.state = {
            gisuList : [],
            projectList : [],
            projectListSize : 0,
            defaultGisu : 5
        }


        this.getOrdersNumber()
    }

    // componentDidMount() {
    //     this.handleGisuChange()
    // }

    getOrdersNumber = () => {
        const apiUrl = 'http://localhost:8085/api/orders';

        axios.get(apiUrl)
            .then(res => {
                    res.data.map((list, index) =>
                        this.setState({
                            gisuList : this.state.gisuList.concat({
                                key : index, text : list.number+'기', value: parseInt(list.number) - 9
                            })
                        })

                    )
                }
            )
            .catch(error => {
                console.log(error);
            });
    }

    getOrdersNumber = () => {
        const apiUrl = 'http://localhost:8085/api/orders';

        axios.get(apiUrl)
            .then(res => {
                    res.data.map((list, index) =>
                        this.setState({
                            gisuList : this.state.gisuList.concat({
                                key : index, text : list.number+'기', value: parseInt(list.number) - 9
                            })
                        })

                    )
                }
            )
            .catch(error => {
                console.log(error);
            });
    }


    handleGisuChange = (e, data) => {
        this.setState({
            defaultGisu : data.value
        })

    }

    // handleMoveLeft = () => {
    //     const { firstListNum } = this.state;
    //     if(firstListNum > 0) {
    //         this.setState({
    //             firstListNum : this.state.firstListNum - 1
    //         })
    //     }
    // }
    //
    // handleMoveRight = () => {
    //     const { projectListSize, firstListNum } = this.state;
    //     if(projectListSize - firstListNum > 4){
    //         this.setState({
    //             firstListNum : this.state.firstListNum + 1
    //         })
    //     }
    //     this.getProjectList()
    // }


    render(){
        const {gisuList} = this.state;

        console.log("ddkdkdkdkdk" + this.state.defaultGisu)
        return(
            <div className="projectListContainer">
                <div className="selectBoxWrapper">
                    <Dropdown placeholder="기수 선택" options={gisuList} onChange={this.handleGisuChange}/>
                </div>
                <div className="projectListWrapper">
                    {/*<div className="moveButtonWrapper" onClick={this.handleMoveLeft}>*/}
                        {/*<img src={left} className="moveProjectObjectbutton"/>*/}
                    {/*</div>*/}
                    <div className="projectObjectList">
                        <ProjectList defaultGisu={this.state.defaultGisu} />
                    </div>
                    {/*<div className="moveButtonWrapper" onClick={this.handleMoveRight}>*/}
                        {/*<img src={right} className="moveProjectObjectbutton" />*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}


export default ProjectListWrapper;


