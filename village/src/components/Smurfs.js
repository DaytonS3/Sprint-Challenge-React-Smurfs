import React, { Component } from 'react';
import '../App.css'
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        
        <div className="flex">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                deleteS={this.props.deleteS}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
