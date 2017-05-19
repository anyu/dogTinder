import React from 'react';
import dogBreeds from '../../utils/DogBreeds.js';
import catBreeds from '../../utils/CatBreeds.js';
import horseBreeds from '../../utils/HorseBreeds.js';
import birdBreeds from '../../utils/BirdBreeds.js';
import rabbitBreeds from '../../utils/RabbitBreeds.js';
import pigBreeds from '../../utils/PigBreeds.js';

//import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem, Navbar, FormGroup, FormControl } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      animal: '',
      breed: '',
      age: '',
      sex: ''
    };
  this.handleSelect = this.handleSelect.bind(this);
  this.handleZipChange = this.handleZipChange.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
    if (value === "Breed" || value === "Age" || value === "Gender") {
      value = '';
    }
    this.setState({
      [name]: value
    }, () => {
      let breeds = [];
      switch (this.state.animal) {
          case 'dog':
            breeds = dogBreeds.slice();
            break;
          case 'cat':
            breeds = catBreeds.slice();
            break;
          case 'horse':
            breeds = horseBreeds.slice();
            break;
          case 'bird':
            breeds = birdBreeds.slice();
            break;
          case 'rabbit':
            breeds = rabbitBreeds.slice();
            break;
          case 'pig':
            breeds = pigBreeds.slice();
            break;
          default:
            console.log('No animal type found');
        }
      this.props.submitQuery(this.state);
    });
  }

  handleZipChange(e){
    if(e.target.value.length === 5 && Number.isInteger(parseInt(e.target.value))) {
      this.setState({zipcode: e.target.value}, () => {
        this.props.submitQuery(this.state);
      })
    }
  }


  render() {
    let spinner = null;
    let breeds = dogBreeds.slice();

    if(this.props.spinning) {
      spinner = <span>
          <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </span>
    }
    return (
      <div className="NavBar">
        <form onSubmit={this.handleSelect}>
          <label>
            <select className="animal" name="animal" onChange={this.handleSelect} >
              <option defaultValue="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="horse">Horse</option>
              <option value="bird">Bird</option>
              <option value="rabbit">Rabbit</option>
              <option value="pig">Pig</option>
            </select>
          </label>

          <label>
            <input className="zipcode" placeholder="Zipcode" onChange={this.handleZipChange} />
          </label>

          <label>
            <select className="gender" name="sex" onChange={this.handleSelect} >
              <option defaultValue="gender">Gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </label>

          <label>
            <select className="age" name="age" onChange={this.handleSelect} style={{ backgroundColor: 'white'}}>
              <option defaultValue="age">Age</option>
              <option value="Baby">Baby</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </label>

          <label>
            <select className="breed" name="breed" onChange={this.handleSelect} style={{ backgroundColor: 'white'}}>
              <option defaultValue="breed">Breed</option>

              {breeds.map(animal =>  <option key={animal.$t} value={animal.$t} >{animal.$t}</option> )}
            </select>
            {spinner}
          </label>

        </form>
      </div>

    );
  }
}

export default NavBar;


{/*<Button type="submit" onClick={() => this.handleSelect()}>Search</Button>*/}
