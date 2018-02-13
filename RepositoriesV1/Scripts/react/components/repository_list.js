//Dependencies
import React, {Component} from 'react';
import RepositoryItem from './repository_item';
import { ListGroup } from 'react-bootstrap';

//this component is the list group of the repositories
//if thhere is no data it will render nothing
//else it will render all the repositories items
const RepositoryList = ({Data,canBookmark}) =>
{
    console.log(Data);
  if(!Data)
  {
    return null
  }

  const repositoryItems = Data.items.map((item) => {
      return <RepositoryItem
          key={item.id}
          Item={item}
          canBookmark={canBookmark}
          />
   });

  return(
      <ListGroup >
        {repositoryItems}
      </ListGroup>
   );
}

export default RepositoryList;
