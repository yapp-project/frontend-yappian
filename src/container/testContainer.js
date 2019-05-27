import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import JoinProjectPopup from "../components/popup/JoinProjectPopup";

class testContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : []
        }
    }




    postUrl(){
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url';

        axios.post(apiUrl, {
            "contents" : "test2",
            "title" : "rrrrrrrrr",
            "type" : "FIRST"
        })
            .then(res => {console.log(res.data.data)})
            .catch( res => {console.log(res)});
    }


    getUrl() {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url/list';

        axios.get(apiUrl)
            .then(res => {
                this.setState ({
                    data : res.data.data[7].title
                })
            })
            .catch(error => {
                console.log(error);
            });

    }

    deleteUrl() {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url/5';

        axios.delete(apiUrl)
            .then(res => {
                    this.getUrl();
            }
            )
            .catch(error => {console.log(error)});

    }



    render(){
        return(
            <JoinProjectPopup />
        );
    }

}

export default testContainer;