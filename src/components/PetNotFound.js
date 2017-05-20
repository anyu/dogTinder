import React from 'react';

class PetNotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h4>No animal matches search results!</h4>
      <img className="sad-dog" src="images/droopy.jpg"/>
    </div>
    );
  }
}

export default PetNotFound;
