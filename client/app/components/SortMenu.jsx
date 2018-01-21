import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { sortTasks } from "../actions/actions";

const options = [
  'date', 'name'
];

const SortMenu = ({sort='date', onSort=f=>f}) => {
  return (
    <select onChange={onSort} value={sort}>
      {
        options.map(option =>
          <option
            key={uuid.v4()}
            value={option}
          >{option}</option>
        )
      }
    </select>
  )
};


export default connect(
  state => ({
    sort: state.sort
  }),
  dispatch => ({
    onSort(e){
      let type = options[e.target.selectedIndex];
      dispatch(sortTasks(type))
    }
  })
)(SortMenu)