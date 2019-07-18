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
    }

    componentDidMount() {
        this.getOrdersNumber()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    getOrdersNumber = () => {
        const apiUrl = 'https://yappian.com/api/orders';

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



    render(){
        const {gisuList} = this.state;

        return(
            <div className="projectListContainer">
                <div className="selectBoxWrapper">
                    <Dropdown placeholder="기수 선택" options={gisuList} onChange={this.handleGisuChange}/>
                </div>
                <div className="projectListWrapper">
                    <div className="projectObjectList">
                        <ProjectList defaultGisu={this.state.defaultGisu} />
                    </div>
                </div>
            </div>
        );
    }
}


export default ProjectListWrapper;


