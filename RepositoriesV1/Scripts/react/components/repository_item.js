//Dependencies
import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import axios from 'axios';

//this component holding instance if Repository Item
class RepositoryItem extends Component
{
  constructor(props)
  {
      super(props);
      this.state = {
          ID: this.props.Item.id,
          Name: this.props.Item.name,
          AvatarUrl: this.props.Item.owner.avatar_url
      }
  }

  // this method on click bookmark sending the item to store in session
  bookmarkItem(event) {
      alert('item bookmarked' );
      axios.post('/default/setSessionOfRepositories', {
          ID: this.state.ID,
          Name: this.state.Name,
          AvatarUrl: this.state.AvatarUrl
      })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  //button is rendering only if we are in the main page
  renderButton() {
      if (this.props.canBookmark) {
          return (
            <Button
              onClick={(event) => this.bookmarkItem(event)}
              bsStyle="success">
              Bookmark
            </Button>
          );
      }
  }

  render(){
    const Item = this.props.Item;
    return (

        <div>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Name: {this.state.Name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <img width={64} height={64} src={this.state.AvatarUrl} alt={this.state.AvatarUrl} />
                    {' '}
                    {this.renderButton()}

                </Panel.Body>
            </Panel>
        </div>
    );
  }
}

export default RepositoryItem;
