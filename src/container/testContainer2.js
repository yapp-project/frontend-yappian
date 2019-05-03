import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Form ,Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios';

class testContainer2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            contents : '',
            title : '',
            type : '',
            urlList : []
        }
    }

    componentDidMount() {
        this.getUrlList();
    }

    getUrlList = () => {
        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url/list';

        axios.get(apiUrl)
            .then(res => {
                this.setState ({
                    urlList : res.data.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
    }

    onSubmit = (e) => {

        const {contents, title, type } = this.state;

        const apiUrl = 'http://15.164.13.58:8085/v1/api/project/1/url';

        axios.post(apiUrl, { contents, title, type })
            .then(res => {
                this.setState({
                    urlList : res.data.data
                })
                console.log(this.state.urlList)
            })
            .catch( res => {console.log(res)});
    }



    render(){
        return(

            <div>
                <div>

                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='content' name='content' onChange={this.onChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='title' name='title' onChange={this.onChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='type' name='type' onChange={this.onChange}/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
                <div>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>content</Table.HeaderCell>
                                <Table.HeaderCell>title</Table.HeaderCell>
                                <Table.HeaderCell>type</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>

                            {this.state.urlList.length > 0 ?
                            this.state.urlList.map((urlList, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{urlList.content}</Table.Cell>
                                    <Table.Cell>{urlList.title}</Table.Cell>
                                    <Table.Cell>{urlList.type}</Table.Cell>
                                </Table.Row>
                            ))
                                :
                                ''
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>




        );
    }

}

export default testContainer2;