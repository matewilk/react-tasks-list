import React from 'react';
import { Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import {editTask, removeTask, saveTask} from "../actions/actions";

const Task = ({id, name, date, disabled=true, onTaskRemove=f=>f, onTaskEdit=f=>f, onTaskSave=f=>f}) => {
  let _name, _date;

  return (
    <Row>
      <input
        id={id}
        ref={(input => _name = input)}
        name='name'
        type='text'
        defaultValue={name}
        disabled={disabled}
      />
      <input
        ref={(input) => _date = input}
        name='date'
        type='date'
        defaultValue={date}
        disabled={disabled}
      />
      <button
        onClick={() => onTaskEdit(id)}
        hidden={!disabled}
      >Edit
      </button>
      <button
        onClick={() => onTaskSave(id, _name ? _name.value : name, _date ? _date.value : date)}
        hidden={disabled}
      >Save
      </button>
      <button onClick={() => onTaskRemove(id)}>Remove</button>
    </Row>
  )
};

export default connect(
  null,
  dispatch =>
    ({
      onTaskRemove(id) {
        dispatch(removeTask(id))
      },
      onTaskEdit(id) {
        dispatch(editTask(id))
      },
      onTaskSave(id, name, date) {
        dispatch(saveTask(id, name, date))
      }
    })
)(Task)