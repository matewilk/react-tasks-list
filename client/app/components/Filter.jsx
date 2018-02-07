import React from 'react';
import { connect } from 'react-redux';

import { TextField } from 'material-ui';

import { filterTasks } from "../actions/actions";

const Filter = ({onFilter=f=>f}) =>
  <TextField
    type='search'
    onChange={(e) => onFilter(e.target.value)}
    label='search...'
  />;

export default connect(
  null,
  dispatch => ({
    onFilter(value){
      dispatch(filterTasks(value))
    }
  })
)(Filter)