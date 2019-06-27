import React, {Component} from 'react';
import './Project.css';
import { Link } from 'react-router-dom'

import finishedIcon from '../../img/finishedIcon.png';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project : this.props.project
        }
    }



    componentWillReceiveProps(nextProps){
        this.setState({
            project : nextProps
        })
        console.log("1234"+ JSON.stringify(this.state.project))
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    render(){
        const {project} = this.state;

        return(
            <Link to={"/main/" + project.projectIdx} className="projectObjectWrapper">
                <img src={project.imgUrl} className="imgSize" />

                <div>
                    <div className="projectName projectFont">{project.name}</div>
                    <div className="projectFont">{project.type}</div>
                    {project.releaseCheck === 'Y' ? (
                        <img src={finishedIcon} className="finishedIconStyled" />
                    ) : ''}
                </div>
            </Link>
        );
    }
}

export default Project;
