import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/allActions';

const AdditionalFeature = props => {
console.log(props.feature);
 
  return (
    <li>
      
      <button className="button" onClick={() => props.addFeature(props.feature)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, { addFeature })(AdditionalFeature);

