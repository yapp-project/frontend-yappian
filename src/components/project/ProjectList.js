import React from 'react';
import './ProjectList.css';
import Project from './Project'

const ProjectList = ({projectList}) => {
    return (
        <div className="wrapperProjectList">
            {
                projectList.map((project, index) => (
                    <Project project={project} key={index}/>
            ))
            }
        </div>
    );
}

export default ProjectList;
