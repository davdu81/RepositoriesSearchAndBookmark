//Dependencies
﻿import React, { Component } from 'react';
import axios from 'axios';
import { Label } from 'react-bootstrap';

//import our component of Repository List
import RepositoryList from './repository_list';


class Bookmarks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    //getting the bookmarks data from session value
    componentDidMount() {
        let currData = null;
        axios.get('/default/getBookmarks')
         .then(res => {
                console.log(res.data);
                this.setState({ data: res.data });
              })
          .catch(function (error) {
                  console.log(error);
                });
    }

    //rendering the result of data
    ShowResults() {
        if (this.state.data == null) {
            return "";
        }
        else {
              if (this.state.data.total_count == null
                  || this.state.data.total_count == 0)
              {
                return (<h3><Label bsStyle="warning">not found results</Label></h3>);
              }
              else
              {
                return (
                    <div>
                      <h3>
                        <Label bsStyle="success">
                          {this.state.data.total_count} was found
                        </Label>
                      </h3>
                      <RepositoryList Data={this.state.data} canBookmark={false} />
                    </div>);
            }
        }
    }

    
    render() {

        return (
            <div>
                {this.ShowResults()}
            </div>
            );

    }
}

export default Bookmarks;
