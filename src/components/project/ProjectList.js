import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from 'semantic-ui-react'

import Project from './Project';
import './ProjectLIst.css';

const options = [
    { key: 1, text: '13기', value: "13" },
    { key: 2, text: '14기', value: "14" },
]

class ProjectList extends Component {
  constructor(props){
      super(props);
  }

  onChange = (event, data) => {
    this.props.onChange(data.value);
  }


  render(){
      return(
          <div className="projectList_main">
              <div className="projectList-select-box">
                  {' '}
                  <Dropdown options={options} inline
                            onChange={this.onChange} value={this.props.gisu}
                  />
              </div>
              <div className="projectList">
                  <FontAwesomeIcon icon={faAngleLeft} className="icon_styled" onClick={this.forward}/>
                  <ul className="list_style">

                      {this.props.projects.slice(0,4).map((project, index) => (

                          <li className="ul_style" key={index}>
                              <Project project={project} />
                          </li>
                      )) }
                  </ul>
                  <FontAwesomeIcon icon={faAngleRight} className="icon_styled"/>
              </div>
          </div>
      );
  }
}


export default ProjectList;
