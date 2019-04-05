import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  } 

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  PostSmurf = NewSmurf => {
    axios.post("http://localhost:3333/smurfs", NewSmurf)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        <Route path="/smurf-form" render={(props) => <SmurfForm {...props} PostS={this.PostSmurf}/>}/>
        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
