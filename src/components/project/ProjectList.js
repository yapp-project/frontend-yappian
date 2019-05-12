import React, { Component } from 'react';

import Project from './Project';
import {Dropdown} from "semantic-ui-react";
import axios from 'axios';
import './ProjectList.css';

import left from '../../img/projeclist-left.png';
import right from '../../img/projeclist-right.png'


class ProjectList extends Component {
  constructor(props){
      super(props);

      this.state = {
          gisuList : []
      }
  }

  componentDidMount() {
      this.getOrdersNumber();
  }

  getOrdersNumber = () => {
      const apiUrl = 'http://15.164.13.58:8085/v1/api/orders';

      axios.get(apiUrl)
          .then(res => {
                  res.data.map((list, index) =>
                      this.setState({
                          gisuList : this.state.gisuList.concat({
                              key : index, text : list.number+'기', value: parseInt(list.number)
                          })
                      })
                  )
              }
                  )
          .catch(error => {
             console.log(error);
          });

  }





  render(){
      const {gisuList} = this.state;

      return(
          <div className="projectListContainer">
              <div className="selectBoxWrapper">
                  <Dropdown placeholder='기수선택' options={gisuList} />
              </div>
              <div className="projectListWrapper">
                  <div className="moveButtonWrapper">
                      <img src={left} className="moveProjectObjectbutton" />
                  </div>
                  <div className="projectObjectList">

                      <Project />
                  </div>
                  <div className="moveButtonWrapper">
                      <img src={right} className="moveProjectObjectbutton" />
                  </div>
              </div>
          </div>
      );
  }
}


export default ProjectList;


