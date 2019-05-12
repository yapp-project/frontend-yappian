import React from 'react';
import './Project.css';

import finishedIcon from '../../img/finishedIcon.png';

const Project = () => {
    return(
        <div className="projectObjectWrapper">
            <div className="projectImage"></div>
            <div className="projectInfoWrapper">
                <div className="projectName">DITO</div>
                <div className="platformName">Android</div>
                <div className="finishedWrapper">
                    <img src={finishedIcon} className="finishedProject"/>
                </div>
            </div>
        </div>
    )
}

export default Project;
