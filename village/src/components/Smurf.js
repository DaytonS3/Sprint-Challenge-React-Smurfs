import React from 'react';
import '../App.css'

const Smurf = props => {

  const deleteSmurf = e => {
    props.deleteS(props.id)
  }
console.log(props)
  return (
    
    <div className="Smurf">
      <i onClick={deleteSmurf} className="fas fa-times-circle"></i>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

