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

        //this.getProjectList()
    }

    componentDidMount() {
        console.log("componenet : " + this.state.defaultGisu)
        this.getProjectList()
        this.setState({
            defaultGisu : this.props.defaultGisu
        })

    }

    componentWillReceiveProps(nextProps){
        console.log(JSON.stringify(nextProps.defaultGisu))
        this.setState({
            defaultGisu : nextProps.defaultGisu
        })
        //
        return this.getProjectList(nextProps.defaultGisu)
    }
    // //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }



    getProjectList = (data) => {

        console.log("get " + data)
        const apiUrl = `http://localhost:8085/api/order/` + data + `/projects`


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
        console.log(this.state.defaultGisu)
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
