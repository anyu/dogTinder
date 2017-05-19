import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Home from './Home.js';
import Kennel from './Kennel.js';
import AddAnimalForm from './AddAnimalForm.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path='/kennel' component={Kennel} />
            <Route path='/addAnimalForm' component={AddAnimalForm} />
          </div>
        </BrowserRouter>
    )}
}

export default App;
