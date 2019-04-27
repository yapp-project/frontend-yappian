import React from 'react';
import './Project.css';

const Project = (props) => {
    const project = props.project;
    return(
        <div className="projectWrapper">
            <div className="projectImage"></div>
            <div className="projectInfo">
                {project.team_name} <br />
                {project.platform}
                <div>
                    {project.finished === true ?
                        <div className="project_finished">
                            <div className="project_finished_font">런칭</div>
                        </div>
                        :
                        ""
                    }
                </div>

            </div>

        </div>
    )
}

export default Project;
