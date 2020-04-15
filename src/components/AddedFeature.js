import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
  console.log(props);
  return (
    <li>
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return;
}
export default connect(mapStateToProps, {})(AddedFeature);
