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
        this.getProjectList(this.props.defaultGisu)
        this.setState({
            defaultGisu : this.props.defaultGisu
        })

    }

    componentWillReceiveProps(nextProps){
        //console.log(JSON.stringify(nextProps.defaultGisu))
        this.setState({
            defaultGisu : nextProps.defaultGisu
        })
        this.getProjectList(this.state.defaultGisu)

    }
    // //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }

    // shouldComponentUpdate가 true이면 실행된다. 업데이트시 실행.
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     this.getProjectList(this.state.defaultGisu)
    // }


    getProjectList = (data) => {

        //console.log("get " + data)
        const apiUrl = `https://yappian.com/api/order/` + data + `/projects`


        axios.get(apiUrl)
            .then(res => {
                //console.log(res.data)
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
        //console.log(this.state.defaultGisu)
        return (
            <div className={this.state.projectListSize <= 0 ? 'toCenter wrapperProjectList' : 'wrapperProjectList'}>
                {
                    this.state.projectListSize > 0 ?
                        (
                            this.state.projectList.map((project, index) => (
                                <Project project={project} key={index}/>
                            ))
                        ) :
                        (
                            <div className="gisuProjectNull">{parseInt(this.state.defaultGisu) + 9}기의 완료된 프로젝트가 없습니다.</div>
                        )
                }

            </div>
        );
    }
}


export default ProjectList;
