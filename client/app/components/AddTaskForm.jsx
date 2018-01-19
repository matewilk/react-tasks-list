import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

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
        <input
          type='text'
          ref={input => _name = input}
        />
      </Row>
      <Row center='xs'>
        <input
          ref={input => _date = input}
          type='date'
        />
      </Row>
      <Row center='xs'>
        <button
          type='submit'
          >Add
        </button>
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