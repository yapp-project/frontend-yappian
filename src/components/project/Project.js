import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom'

import finishedIcon from '../../img/finishedIcon.png';

const Project = ({project}) => {

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

export default Project;
