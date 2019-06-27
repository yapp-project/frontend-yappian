import React, {Component} from 'react';
import './ProjectList.css';
import Project from './Project'
import axios from "axios";

class ProjectList extends Component{
    constructor(props){
        super(props);

        this.state = {
            projectList : [],
            defaultGisu : this.props.defaultGisu,
            projectListSize : 0
        }

        this.getProjectList()
    }

    componentWillReceiveProps(nextProps){
        this.getProjectList()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }



    getProjectList = () => {
        //console.log(this.state.defaultGisu)
        const apiUrl = `http://localhost:8085/api/order/` + this.state.defaultGisu + `/projects`


        axios.get(apiUrl)
            .then(res => {
                console.log(res.data)
                this.setState({
                    projectListSize : res.data.length,
                    projectList : res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    // btnClick = () => {
    //     console.log(this)
    // }

    render(){
        return (
            <div className="wrapperProjectList">
                {
                    this.state.projectList.map((project, index) => (
                        <Project project={project} key={index}/>
                    ))
                }
            </div>
        );
    }
}


export default ProjectList;
