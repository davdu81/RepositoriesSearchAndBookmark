//Dependencies
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//this componet is request form that holding the serch string

class Search extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { currSearch: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onSubmitForm(this.state.currSearch);
    event.preventDefault();
  }

  render()
  {
    return (
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            value = {this.state.currSearch}
            onChange = { event => {this.setState({currSearch : event.target.value})}}
          />
          {'   '}
          <Button bsStyle="primary" type="submit">Search</Button>
        </form>
       </div>
    );
  }
}

export default Search;
