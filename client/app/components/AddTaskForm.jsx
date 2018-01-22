import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from 'material-ui';
import { Row } from 'react-flexbox-grid';

import { addTask } from "../actions/actions";

const AddTaskForm = ({onTaskAdd=f=>f}) => {
  let _name, _date;

  const submit = e => {
    e.preventDefault();
    onTaskAdd(_name.value, _date.value);

    _name.value = '';
    _date.value = ''
  };

  return (
    <form onSubmit={submit}>
      <Row center='xs'>
        <TextField
          type='text'
          name='name'
          inputProps={{ref: node => _name = node}}
        />
      </Row>
      <Row center='xs'>
        <TextField
          inputProps={{ref: node => _date = node}}
          type='date'
          name='date'
        />
      </Row>
      <Row center='xs'>
        <Button
          raised
          color='secondary'
          type='submit'
          >Add
        </Button>
      </Row>
    </form>
  )
};

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    onTaskAdd(name, date) {
      dispatch(addTask(name, date))
    }
  })
)(AddTaskForm);