import C from '../constants';
import uuid from 'uuid';

export const addTask = (name, date=new Date()) =>
  ({
    type: C.ADD_TASK,
    id: uuid.v4(),
    name,
    date
  });

export const editTask = (id) =>
  ({
    type: C.EDIT_TASK,
    id
  });

export const saveTask = (id, name, date=new Date()) =>
  ({
    type: C.SAVE_TASK,
    id,
    name,
    date
  });

export const removeTask = (id) =>
  ({
    type: C.REMOVE_TASK,
    id: id
  });

export const sortTasks = (sortBy='date') =>
  ({
    type: C.SORT_TASKS,
    sortBy
  });