import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/allActions';

const AddedFeature = props => {
  console.log(props);
  return (
    <li>
      <button className="button" onClick = {() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null, { removeFeature })(AddedFeature);
