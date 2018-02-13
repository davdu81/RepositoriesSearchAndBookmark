//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'react-bootstrap';
import axios from 'axios';

//import our componets
import Search from './search';
import RepositoryList from './repository_list';

//the api string that gettin the repositories
const API_REPOSIDORIES = 'https://api.github.com/search/repositories?q=';

//this component is responsable on the search from
//and holding the data that we receive from the api
class Main extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        data : null,
        searchValue : ''
      };

  }

  getData(searchValue){
      if (searchValue != null && searchValue.length > 0 ) {
          const currUrl = API_REPOSIDORIES + searchValue;
          axios.get(currUrl)
              .then(results => {
                  console.log(results);
                  this.setState({ data : results.data }); 
              })
              .catch(function (error) {
                  console.log(error);
              });
      }

  }
  //rendering the results by the the data was found
  ShowResults() {
      if (this.state.data == null)
      {
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
                    {this.state.data.total_count} was found and {this.state.data.items.length} are showing
                  </Label>
                </h3>
                <RepositoryList Data={this.state.data} canBookmark/>
              </div>);
          }
      }
  }


  render() {

      return (
       <div>
        <h2>Welcome!! Please enter your search</h2>
        <Search
          onSubmitForm={searchValue => this.getData(searchValue)}
          Data={this.state.data}
        />
        {this.ShowResults()}
      </div>
    );
  }
}

export default Main;
